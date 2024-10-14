import { useEffect } from 'react';
import useGoogleFonts from '../hooks/useGoogleFonts';
import { getGuestId, getGuestName } from '../utils/generateRandomStrings';
import {
  disconnectSocket,
  initiateSocket,
  subscribeToEvent,
} from '../utils/socket';
import { ITakiPopupsProps } from './TakiPopups.types';
import { closeBanner, closeBannerWithoutHeyServer, closePopup, closePopupWithoutHeyServer } from '../utils/closePopup';
import { requestPermission } from '../firebase/permission';
import { onMessageListener } from '../firebase/message';
import {
  clearBannerStore,
  clearPopupsStore,
  deleteManyBanners,
  deleteManyPopup,
  fetchFirstBanner,
  fetchFirstPopup,
  fetchPopupsUsingUrl,
  putBannerInCorrectPlace,
  putPopupInCorrectPlace,
  saveBannersInIndexedDb,
  savePopupInIndexedDb,
} from '../cache/indexedDB';
import { renderService } from '../hooks/renderService';
import { getUserNotifications, getVersion } from '../api/getUserNotifications';

export const TakiPopups = ({
  name,
  appId,
  memberId,
  meta_data,
}: ITakiPopupsProps) => {
  useGoogleFonts();
  const userBaseInfo = {
    name: name || getGuestName(),
    memberId: memberId || getGuestId(),
  };

  async function handleNotifications() {
    const res = await getVersion(appId);
    let currentVersion = window.localStorage.getItem('app_version') || 'empty';
    if (currentVersion !== res.version.toString()) {
      window.localStorage.setItem('app_version', res.version);
      const userInfo = {
        ...userBaseInfo,
        appId,
        meta_data,
      };
      const notificationRes = await getUserNotifications(userInfo);
      if (notificationRes?.message) {
        await clearPopupsStore();
        await clearBannerStore();
        const { banner, popup } = notificationRes;
        if (popup) {
          savePopupInIndexedDb(popup);
        }
        if (banner) {
          saveBannersInIndexedDb(banner);
        }
      }
    }

    const popupRes = await fetchFirstPopup();
    renderService({ response: popupRes, serviceType: 'popup', userBaseInfo });

    const bannerRes = await fetchFirstBanner();
    renderService({ response: bannerRes, serviceType: 'banner', userBaseInfo });
  }

  handleNotifications();

  onMessageListener();
  // useEffect(() => {
  //   const currentPath = window.location.pathname;
  //   fetchPopupsUsingUrl(currentPath).then((res) => {
  //     if (res.length > 0) {
  //       renderService({ response: res[0], serviceType: 'popup', dataOfUser });
  //     }
  //   });
  // }, [window.location.href]);
  requestPermission({
    name,
    devices: 'web',
    appId,
    memberId,
    metaData: meta_data,
  });
  useEffect(() => {
    initiateSocket({ memberId: String(userBaseInfo.memberId) });
    subscribeToEvent<string>('receive-popup-mobile', async (response: any) => {
      await fetchFirstPopup().then((res) => {
        if (!res || response.priority >= res.priority) {
          renderService({
            response: response,
            serviceType: 'popup',
            userBaseInfo,
          });
        }
      });
      await putPopupInCorrectPlace(response);
    });
    subscribeToEvent<string>(
      'cancel-this-popup',
      async ({ canceledIds }: any) => {
        await fetchFirstPopup().then((response) => {
          if (canceledIds?.includes(response?.id)) {
            closePopupWithoutHeyServer();
          }
        });
        await deleteManyPopup(canceledIds);
      }
    );
    subscribeToEvent<string>(
      'cancel-this-banner',
      async ({ canceledIds }: any) => {
        await fetchFirstBanner().then((response) =>
        {
          console.log(response.id)
          if (canceledIds?.includes(response?.id)) {
            closeBannerWithoutHeyServer();
          }
        });
        await deleteManyBanners(canceledIds);
      }
    );
    subscribeToEvent<string>('receive-banner-web', async (response: any) => {
      await fetchFirstBanner().then((res) => {
        if (!res || response.settings.priority >= res.settings.priority) {
          renderService({
            response: response,
            serviceType: 'banner',
            userBaseInfo,
          });
        }
      });
      await putBannerInCorrectPlace(response);
    });
    return () => {
      disconnectSocket();
    };
  }, []);

  return null;
};

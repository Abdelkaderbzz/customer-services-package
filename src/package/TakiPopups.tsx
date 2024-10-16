import { useEffect } from 'react';
import useGoogleFonts from '../hooks/useGoogleFonts';
import { getGuestId, getGuestName } from '../utils/generateRandomStrings';
import {
  disconnectSocket,
  initiateSocket,
  subscribeToEvent,
} from '../utils/socket';
import { ITakiPopupsProps } from './TakiPopups.types';
import {
  cancelBannerTrigger,
  cancelPopupTrigger,
} from '../utils/closePopup';
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
import { getElementByClass } from '../utils/getElement';
import { DeepEqualObject } from '../utils/deepEqual';
import { checkAndRequestPermission } from '../firebase/checkAndRequestPermission';

export const TakiPopups = ({
  name,
  appId,
  memberId,
  meta_data,
}: ITakiPopupsProps) => {
  useGoogleFonts();
  const userBaseInfo = {
    name: name || getGuestName(),
    memberId: memberId ? memberId?.toString() : getGuestId(),
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

  // useEffect(() => {
  //   const currentPath = window.location.pathname;
  //   fetchPopupsUsingUrl(currentPath).then((res) => {
  //     if (res.length > 0) {
  //       renderService({ response: res[0], serviceType: 'popup', dataOfUser });
  //     }
  //   });
  // }, [window.location.href]);
  onMessageListener();
  useEffect(() => {
    const currentUser = {
      devices: 'web',
      appId,
      name,
      memberId,
      metaData: meta_data,
    } as DeepEqualObject;
    checkAndRequestPermission(currentUser);
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
        await deleteManyPopup(canceledIds);
        const displayedPopup = getElementByClass(
          'popup_service_wrapper_container'
        )?.getAttribute('popup-id');
        if (canceledIds?.includes(displayedPopup)) {
          cancelPopupTrigger(userBaseInfo);
        }
      }
    );
    subscribeToEvent<string>(
      'cancel-this-banner',
      async ({ canceledIds }: any) => {
        await deleteManyBanners(canceledIds);
        const displayedBanner = getElementByClass(
          'banner_service_preview'
        )?.getAttribute('banner-id');
        if (canceledIds?.includes(displayedBanner)) {
          cancelBannerTrigger(userBaseInfo);
        }
      }
    );
    subscribeToEvent<string>('receive-banner-web', async (response: any) => {
      await fetchFirstBanner().then((res) => {
        if (!res || response?.settings?.priority >= res?.settings?.priority) {
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

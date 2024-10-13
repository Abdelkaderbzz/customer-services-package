'use client';
import { useEffect } from 'react';
import useGoogleFonts from '../hooks/useGoogleFonts';
import { getGuestId, getGuestName } from '../utils/generateRandomStrings';
import {
  disconnectSocket,
  emitEvent,
  initiateSocket,
  subscribeToEvent,
} from '../utils/socket';
import { ITakiPopupsProps } from './TakiPopups.types';
import { closePopup } from '../utils/closePopup';
import useUrl from '../hooks/useUrl';
import { requestPermission } from '../firebase/permission';
import { onMessageListener } from '../firebase/message';
import {
  clearBannerStore,
  clearPopupsStore,
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
  const dataOfUser = {
    name: name || getGuestName(),
    memberId: memberId || getGuestId(),
    appId,
    ...meta_data,
  };
  const dataOfUserV2 = {
    name: name || getGuestName(),
    memberId: memberId || getGuestId(),
    appId,
    meta_data,
  };

  async function handleNotifications() {
    const res = await getVersion(appId);
    let currentVersion = window.localStorage.getItem('app_version') || 'empty';
    if (currentVersion !== res.version.toString()) {
      window.localStorage.setItem('app_version', res.version);

      const notificationRes = await getUserNotifications(dataOfUserV2);
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
    renderService({ response: popupRes, serviceType: 'popup', dataOfUser });

    const bannerRes = await fetchFirstBanner();
    renderService({ response: bannerRes, serviceType: 'banner', dataOfUser });
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
    initiateSocket({ memberId: String(dataOfUser.memberId) });
    subscribeToEvent<string>('receive-popup-mobile', async (response: any) => {
      await fetchFirstPopup().then((res) => {
        if (!res || response.priority >= res.priority) {
          renderService({
            response: response,
            serviceType: 'popup',
            dataOfUser,
          });
        }
      });
      await putPopupInCorrectPlace(response);
    });
    subscribeToEvent<string>('cancel-this-popup', ({ canceledIds }: any) => {
      const currentPopupId = window.localStorage.getItem('currentPopupId');
      if (canceledIds?.includes(currentPopupId)) {
        closePopup(dataOfUser);
      }
    });
    subscribeToEvent<string>('receive-banner-web', async (response: any) =>
    {
      console.log(response)
      await fetchFirstBanner().then((res) => {
        if (!res || response.priority >= res.priority) {
          renderService({
            response: response,
            serviceType: 'banner',
            dataOfUser,
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

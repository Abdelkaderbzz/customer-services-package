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
  fetchFirstBanner,
  fetchFirstPopup,
  fetchPopupsUsingUrl,
  saveBannersInIndexedDb,
  savePopupInIndexedDb,
} from '../cache/indexedDB';
import { renderService } from '../hooks/renderService';

export const TakiPopups = ({ name, memberId, meta_data }: ITakiPopupsProps) => {
  useGoogleFonts();
  const dataOfUser = {
    name: name || getGuestName(),
    memberId: memberId || getGuestId(),
    // domaineName: window.location.hostname,
    domaineName: 'listninja.netlify.app',
    ...meta_data,
  };
  window.localStorage.setItem('popupPriority', '0');
  window.localStorage.setItem('bannerPriority', '0');

  savePopupInIndexedDb();
  saveBannersInIndexedDb();
  // fetchFirstPopup().then((res) => {
  //   renderService({ response: res, serviceType: 'popup', dataOfUser });
  // });
  fetchFirstBanner().then((res) => {
    renderService({ response: res, serviceType: 'banner', dataOfUser });
  });

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
    domaineName: window.location.hostname,
    memberId,
    metaData: meta_data,
  });
  useEffect(() => {
    initiateSocket();
    emitEvent('hey-server-web', dataOfUser);
    subscribeToEvent<string>('receive-popup-mobile', (response: any) => {
      const popupPriority = window.localStorage.getItem('popupPriority');
      const incomingPopupPriority = response?.priority;
      if (Number(incomingPopupPriority) >= Number(popupPriority)) {
        window.localStorage.setItem('currentPopupId', response?.id);
        window.localStorage.setItem('popupPriority', incomingPopupPriority);
        renderService({ response, serviceType: 'popup', dataOfUser });
      }
    });
    subscribeToEvent<string>('cancel-this-popup', ({ canceledIds }: any) => {
      const currentPopupId = window.localStorage.getItem('currentPopupId');
      if (canceledIds?.includes(currentPopupId)) {
        closePopup(dataOfUser);
      }
    });

    subscribeToEvent<string>('receive-banner-web', (response: any) => {
      const bannerPriority = window.localStorage.getItem('bannerPriority');
      const incomingBannerPriority = response?.settings?.priority;
      if (Number(incomingBannerPriority) >= Number(bannerPriority)) {
        window.localStorage.setItem('bannerPriority', incomingBannerPriority);
        renderService({ response, serviceType: 'banner', dataOfUser });
      }
    });
    return () => {
      disconnectSocket();
    };
  }, []);

  return null;
};

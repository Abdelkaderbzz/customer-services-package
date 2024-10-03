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
import ReactDOM from 'react-dom/client';
import PopupService from '../components/PopupService/PopupService';
import { ITakiPopupsProps } from './TakiPopups.types';
import BannerService from '../components/BannerService/BannerService';
import { closePopup } from '../utils/closePopup';
import useUrl from '../hooks/useUrl';
import { requestPermission } from '../firebase/permission';
import { onMessageListener } from '../firebase/message';

export const TakiPopups = ({ name, memberId, meta_data }: ITakiPopupsProps) => {
  useGoogleFonts();
  const dataOfUser = {
    name: name || getGuestName(),
    memberId: memberId || getGuestId(),
    domaineName: window.location.hostname,
    ...meta_data,
  };
  window.localStorage.setItem('popupPriority', '0');
  window.localStorage.setItem('bannerPriority', '0');
  const renderService = ({ response, serviceType }: any) => {
    let popupContainer = document.getElementById('popup-service-container');

    // Create the container only if it doesn't already exist
    if (!popupContainer) {
      popupContainer = document.createElement('div');
      popupContainer.id = 'popup-service-container';
      document.body.appendChild(popupContainer);
    }

    const root = ReactDOM.createRoot(popupContainer);

    // Render the appropriate component
    root.render(
      serviceType === 'popup' ? (
        <PopupService response={{ ...response, dataOfUser }} />
      ) : (
        <BannerService response={{ ...response, dataOfUser }} />
      )
    );
  };
  onMessageListener()
  requestPermission({ devices:'web', domaineName:window.location.href, memberId, metaData:{...meta_data,firstName:name} });
  useUrl(dataOfUser);
  useEffect(() => {
    initiateSocket();
    emitEvent('hey-server-web', dataOfUser);
    subscribeToEvent<string>('receive-popup-mobile', (response: any) => {
      const popupPriority = window.localStorage.getItem('popupPriority');
      const incomingPopupPriority = response?.priority;
      if (Number(incomingPopupPriority) >= Number(popupPriority)) {
        window.localStorage.setItem('currentPopupId', response?.id);
        window.localStorage.setItem('popupPriority', incomingPopupPriority);
        renderService({ response, serviceType: 'popup' });
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
        renderService({ response, serviceType: 'banner' });
      }
    });
    return () => {
      disconnectSocket();
    };
  }, []);

  return null;
};

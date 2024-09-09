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

export const TakiPopups = ({ name, memberId, meta_data }: ITakiPopupsProps) => {
  useGoogleFonts();
  const renderService = ({ response, serviceType }: any) =>
  {
    console.log(response)
    const popupContainer = document.createElement('div');
    popupContainer.id = 'popup-service-container';
    document.body.appendChild(popupContainer);
    const root = ReactDOM.createRoot(popupContainer);
    // const unmount = () => {
    //   root.unmount();
    //   document.body.removeChild(popupContainer);
    // };

    root.render(
      serviceType === 'popup' ? (
        <PopupService response={{...response,memberId,name}} />
      ) : (
        <BannerService response={response}/>
      )
    );
  };
  useEffect(() => {
    initiateSocket();
    emitEvent('hey-server-web', {
      name: name || getGuestName(),
      memberId: memberId || getGuestId(),
      domaineName: 'studentnew.takiacademy.me',
      ...meta_data,
    });
    subscribeToEvent<string>('receive-popup-mobile', (response: any) => {
      renderService({ response, serviceType: 'popup' });
    });
    
    subscribeToEvent<string>('receive-banner-web', (response: any) => {
      renderService({ response, serviceType: 'banner' });
    });
    return () => {
      disconnectSocket();
    };
  }, []);
  
  return null;
};

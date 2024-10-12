import {
  deleteFirstBanner,
  deleteFirstPopup,
  deletePopupFromIndexedDb,
  fetchFirstBanner,
  fetchFirstPopup,
} from '../cache/indexedDB';
import { renderService } from '../hooks/renderService';
import { removeBodyStyles } from './addStyle';
import { getElementByClass } from './getElement';
import { emitEvent } from './socket';

export const closePopup = (dataOfUser: any) => {
  closePopupWithoutHeyServer();
  window.localStorage.setItem('popupPriority', '0');
  //dataOfUser['href'] = window.location.href;
  // emitEvent('hey-server-web', dataOfUser);
  deleteFirstPopup().then(() => {
    fetchFirstPopup().then((res) => {
      if (res) {
        renderService({ response: res, serviceType: 'popup', dataOfUser });
      }
    });
  });
};
export const closePopupWithoutHeyServer = () => {
  getElementByClass('popup-taki')?.remove();
  getElementByClass('overlay-popups')?.remove();
};
export const closeBanner = (dataOfUser: any) => {
  // emitEvent('hey-server-web', dataOfUser);
  closeBannerWithoutHeyServer();
  removeBodyStyles();
  window.localStorage.setItem('bannerPriority', '0');
  deleteFirstBanner().then(() => {
    fetchFirstBanner().then((res) => {
      if (res) {
        renderService({ response: res, serviceType: 'banner', dataOfUser });
      }
    });
  });
};
export const closeBannerWithoutHeyServer = () => {
  getElementByClass('banner_service_preview')?.remove();
};

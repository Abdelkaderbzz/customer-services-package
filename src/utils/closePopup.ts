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

export const closePopup = async (userBaseInfo: any) => {
  await closePopupWithoutHeyServer();
  deleteFirstPopup().then(() => {
    fetchFirstPopup().then((res) => {
      if (res) {
        renderService({ response: res, serviceType: 'popup', userBaseInfo });
      }
    });
  });
};
export const closePopupWithoutHeyServer = () => {
  getElementByClass('popup-taki')?.remove();
  getElementByClass('overlay-popups')?.remove();
};
export const closeBanner = async(userBaseInfo: any) => {
  await closeBannerWithoutHeyServer();
  removeBodyStyles();
  deleteFirstBanner().then(() => {
    fetchFirstBanner().then((res) => {
      if (res) {
        renderService({ response: res, serviceType: 'banner', userBaseInfo });
      }
    });
  });
};
export const closeBannerWithoutHeyServer = () => {
  getElementByClass('banner_service_preview')?.remove();
};

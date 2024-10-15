import {
  deleteByBannerId,
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

export const closeBanner = async (userBaseInfo: any) => {
  const displayedBannerId = getElementByClass(
    'banner_service_preview'
  )?.getAttribute('banner-id');
  await deleteByBannerId(displayedBannerId);
  await closeBannerWithoutHeyServer();
  removeBodyStyles();
  fetchFirstBanner().then((res) => {
    if (res) {
      renderService({ response: res, serviceType: 'banner', userBaseInfo });
    }
  });
};
export const closeBannerWithoutHeyServer = () => {
  getElementByClass('banner_service_preview')?.remove();
};
export const cancelBannerTrigger = async (userBaseInfo: {
  memberId: string;
  name: string;
}) => {
  await getElementByClass('banner_service_preview')?.remove();
  removeBodyStyles();
  await fetchFirstBanner().then((res) => {
    if (res) {
      renderService({ response: res, serviceType: 'banner', userBaseInfo });
    }
  });
};
export const cancelPopupTrigger = async (userBaseInfo: {
  memberId: string;
  name: string;
}) => {
  await closePopupWithoutHeyServer();
  fetchFirstPopup().then((res) => {
    if (res) {
      renderService({ response: res, serviceType: 'popup', userBaseInfo });
    }
  });
};

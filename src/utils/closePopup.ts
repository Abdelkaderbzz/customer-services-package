import {
  deleteByBannerId,
  deletePopupFromIndexedDb,
  fetchFirstBanner,
  fetchFirstPopup,
} from '../cache/indexedDB';
import { renderService } from '../hooks/renderService';
import { removeBodyStyles } from './addStyle';
import {
  getIdOfDisplayedBanner,
  getIdOfDisplayedPopup,
} from './getCurrentServices';
import { getElementByClass } from './getElement';

export const closePopup = async (userBaseInfo: any) => {
  const displayedPopupId = getIdOfDisplayedPopup();
  await deletePopupFromIndexedDb(displayedPopupId);
  await closePopupWithoutHeyServer();
  fetchFirstPopup().then((res) => {
    if (res) {
      renderService({ response: res, serviceType: 'popup', userBaseInfo });
    }
  });
};
export const closePopupWithoutHeyServer = () => {
  getElementByClass('popup_service_wrapper_container')?.remove();
};

export const closeBanner = async (userBaseInfo: any) => {
  const displayedBannerId = getIdOfDisplayedBanner()
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
  await closePopupWithoutHeyServer();
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

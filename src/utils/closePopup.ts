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
interface IBaseInfo {
  memberId: string;
  name: string;
}
export const destroyServiceFromTheDom = (service: string) => {
  if (service === 'popup') {
    getElementByClass('popup_service_wrapper_container')?.remove();
  } else {
    getElementByClass('banner_service_preview')?.remove();
  }
};
const renderPopup = (userBaseInfo: IBaseInfo) => {
  fetchFirstPopup().then((res) => {
    if (res) {
      renderService({ response: res, serviceType: 'popup', userBaseInfo });
    }
  });
};
const renderBanner = (userBaseInfo: IBaseInfo) => {
  fetchFirstBanner().then((res) => {
    if (res) {
      renderService({ response: res, serviceType: 'banner', userBaseInfo });
    }
  });
};
export const closePopup = async (userBaseInfo: IBaseInfo) => {
  const displayedPopupId = getIdOfDisplayedPopup();
  await deletePopupFromIndexedDb(displayedPopupId);
  await destroyServiceFromTheDom('popup');
  await renderPopup(userBaseInfo);
};

export const closeBanner = async (userBaseInfo: IBaseInfo) => {
  const displayedBannerId = getIdOfDisplayedBanner();
  await deleteByBannerId(displayedBannerId);
  await destroyServiceFromTheDom('banner');
  removeBodyStyles();
  await renderBanner(userBaseInfo);
};

//? close banner

export const cancelBannerTrigger = async (userBaseInfo: IBaseInfo) => {
  await destroyServiceFromTheDom('banner');
  removeBodyStyles();
  await renderBanner(userBaseInfo);
};

//? close popup
export const cancelPopupTrigger = async (userBaseInfo: IBaseInfo) => {
  await destroyServiceFromTheDom('popup');
  await renderPopup(userBaseInfo);
};

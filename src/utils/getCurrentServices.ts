import { getElementByClass } from './getElement';

export const getIdOfDisplayedPopup = () => {
  const displayedPopupId = getElementByClass(
    'popup_service_wrapper_container'
  )?.getAttribute('popup-id');
  return displayedPopupId;
};
export const getIdOfDisplayedBanner = () => {
  const displayedBannerId = getElementByClass(
    'banner_service_preview'
  )?.getAttribute('banner-id');
  return displayedBannerId;
};

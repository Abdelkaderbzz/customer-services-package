import { useEffect } from 'react';
import useGoogleFonts from '../hooks/useGoogleFonts';
import { getGuestId, getGuestName } from '../utils/generateRandomStrings';
import {
  disconnectSocket,
  initiateSocket,
  subscribeToEvent,
} from '../utils/socket';
import { ITakiPopupsProps } from './TakiPopups.types';
import { cancelBannerTrigger, cancelPopupTrigger } from '../utils/closePopup';
import { onMessageListener } from '../firebase/message';
import * as IN_DB from '../cache/indexedDB';
import { renderService } from '../hooks/renderService';
import { getUserNotifications, getVersion } from '../api/getUserNotifications';
import { DeepEqualObject } from '../utils/deepEqual';
import { checkAndRequestPermission } from '../firebase/checkAndRequestPermission';
import {
  getIdOfDisplayedBanner,
  getIdOfDisplayedPopup,
} from '../utils/getCurrentServices';

export const ParentComponent = ({
  name,
  appId,
  memberId,
  meta_data,
}: ITakiPopupsProps) => {
  useGoogleFonts();
  const userBaseInfo = {
    name: name || getGuestName(),
    memberId: memberId ? memberId?.toString() : getGuestId(),
  };
  const handlePopup = async (response: any) => {
    const existingPopup = await IN_DB.fetchFirstPopup();
    if (!existingPopup || response.priority >= existingPopup.priority) {
      renderService({ response, serviceType: 'popup', userBaseInfo });
    }
    await IN_DB.addPopupToIndexedDb(response);
  };

  const handleBanner = async (response: any) => {
    const existingBanner = await IN_DB.fetchFirstBanner();
    if (
      !existingBanner ||
      response?.settings?.priority >= existingBanner?.settings?.priority
    ) {
      renderService({ response, serviceType: 'banner', userBaseInfo });
    }
    await IN_DB.addBannerToIndexedDb(response);
  };

  const handleCancelPopup = async ({ canceledIds }: any) => {
    await IN_DB.deleteManyPopup(canceledIds);
    const displayedPopupId = getIdOfDisplayedPopup();
    if (canceledIds?.includes(displayedPopupId)) {
      cancelPopupTrigger(userBaseInfo);
    }
  };

  const handleCancelBanner = async ({ canceledIds }: any) => {
    await IN_DB.deleteManyBanners(canceledIds);
    const displayedBannerId = getIdOfDisplayedBanner();
    if (canceledIds?.includes(displayedBannerId)) {
      cancelBannerTrigger(userBaseInfo);
    }
  };
  async function handleNotifications() {
    const res = await getVersion(appId);
    const appVersion=`app_version_${userBaseInfo.memberId}`
    let currentVersion = window.localStorage.getItem(appVersion) || 'empty';
    if (currentVersion !== res.version.toString()) {
      window.localStorage.setItem(appVersion, res.version);
      const userInfo = {
        ...userBaseInfo,
        appId,
        meta_data,
      };
      const notificationRes = await getUserNotifications(userInfo);
      if (notificationRes?.message) {
        await IN_DB.clearPopupsStore();
        await IN_DB.clearBannerStore();
        const { banner, popup } = notificationRes;
        if (popup) {
          IN_DB.savePopupInIndexedDb(popup);
        }
        if (banner) {
          IN_DB.saveBannersInIndexedDb(banner);
        }
      }
    }

    const popupRes = await IN_DB.fetchFirstPopup();
    if (popupRes) {
      renderService({ response: popupRes, serviceType: 'popup', userBaseInfo });
    }
    const bannerRes = await IN_DB.fetchFirstBanner();
    if (bannerRes) {
      renderService({
        response: bannerRes,
        serviceType: 'banner',
        userBaseInfo,
      });
    }
  }

  onMessageListener();
  useEffect(() =>
  {
    IN_DB.initializeDb(userBaseInfo.memberId)
    const currentUser = {
      devices: 'web',
      appId,
      name,
      memberId,
      metaData: meta_data,
    } as DeepEqualObject;
    handleNotifications();
    checkAndRequestPermission(currentUser);
    initiateSocket({ memberId: String(userBaseInfo.memberId) });
    subscribeToEvent<string>('receive-popup-mobile', handlePopup);
    subscribeToEvent<string>('receive-banner-web', handleBanner);
    subscribeToEvent<string>('cancel-this-popup', handleCancelPopup);
    subscribeToEvent<string>('cancel-this-banner', handleCancelBanner);
    return () => {
      disconnectSocket();
    };
  }, []);

  return null;
};

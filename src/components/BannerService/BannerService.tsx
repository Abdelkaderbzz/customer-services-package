// @ts-nocheck

import { VscChromeClose } from 'react-icons/vsc';
import {
  bannerServicePreview,
  bannerServicePreviewContent,
  bannerServicePreviewItems,
  bannerServicePreviewSvg,
  imageUserStyle,
  reactionsList,
  reactionsListSpan,
  urlAction,
} from './style';
import { closeBanner } from '../../utils/closePopup';
import { postReact } from '../../api/interaction';

const BannerService = ({ response }: any) => {
  const {
    dataOfUser,
    settings,
    actions,
    avatar,
    behavior,
    content,
    dismissButton,
    showSender,
    token,
    _id: bannerId,
  } = response;

  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const userAvatar = `${baseUrl}/users/${avatar}`;
  const bannerStyle: any = {
    ...(settings.bannerPosition === 'top' ? { top: 0 } : { bottom: 0 }),
    ...(settings.bannerStyle === 'floating'
      ? { width: 'calc(100% - 40px)' }
      : { width: '100%' }),
    ...(settings.bannerStyle === 'floating'
      ? {}
      : {
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        }),
    background: settings.background,
    ...bannerServicePreview,
  };
  const bannerStyleClass =
    settings?.bannerStyle === 'floating' && 'floating_banner';
  const postBannerReact = (emoji) => {
    postReact(
      {
        name: dataOfUser?.name,
        code: emoji,
        participatorId: dataOfUser?.memberId,
      },
      `/banners/${bannerId}/reacts`,
      token
    ).then(() => closeBanner(dataOfUser));
  };
  const bannerUrlHandler = ({
    url,
    isUrlOpenedInNewTab,
    closeBannerOnClick,
  }) => {
    if (isUrlOpenedInNewTab) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
    if (closeBannerOnClick)
    { 
      closeBanner(dataOfUser);
    }
  };
  const closeBannerHandler = () =>
  {
      postReact(
        {
          name: dataOfUser?.name,
          code: 'x-close',
          participatorId: dataOfUser?.memberId,
        },
        `/banners/${bannerId}/reacts`,
        token
      ).then(() => closeBanner(dataOfUser));
  };
  return (
    <div
      style={bannerStyle}
      className={`banner_service_preview ${bannerStyleClass}`}
    >
      <div style={bannerServicePreviewItems}>
        {showSender && (
          <img
            style={imageUserStyle}
            crossOrigin='anonymous'
            src={userAvatar}
            alt='avatar'
          />
        )}
        <div style={bannerServicePreviewContent}>{content}</div>
        {actions.actionType === 'reactions' && (
          <div style={reactionsList}>
            {actions.properties.reactions.reactionsList.map(
              (reaction: string, index: number) => (
                <span
                  style={reactionsListSpan}
                  onClick={() => postBannerReact(reaction)}
                  key={index}
                >
                  {reaction}
                </span>
              )
            )}
          </div>
        )}
        {actions.actionType === 'url' && (
          <p
            onClick={() => bannerUrlHandler(actions?.properties?.url)}
            style={urlAction}
          >
            {actions.properties.url.urlText}
          </p>
        )}
      </div>
      {dismissButton && (
        <VscChromeClose
          style={bannerServicePreviewSvg}
          onClick={closeBannerHandler}
        />
      )}
    </div>
  );
};

export default BannerService;

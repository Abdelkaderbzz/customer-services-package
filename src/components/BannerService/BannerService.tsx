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

const BannerService = ({ response }: any) => {
  const {
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
                  onClick={() => console.log('banner closed')}
                  key={index}
                >
                  {reaction}
                </span>
              )
            )}
          </div>
        )}
        {actions.actionType === 'url' && (
          <p onClick={() => console.log('banner closed')} style={urlAction}>
            {actions.properties.url.urlText}
          </p>
        )}
      </div>
      {dismissButton && (
        <VscChromeClose
          style={bannerServicePreviewSvg}
          onClick={() => console.log('banner closed')}
        />
      )}
    </div>
  );
};

export default BannerService;

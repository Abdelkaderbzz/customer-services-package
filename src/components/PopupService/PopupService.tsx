// @ts-nocheck
import { useEffect } from 'react';
import useGoogleFonts from '../../hooks/useGoogleFonts';
import { closePopup, closePopupWithoutHeyServer } from '../../utils/closePopup';
import { translations } from '../../utils/translation';
import { postComment, postReact } from '../../api/interaction';

const PopupService = ({response:{ id, priority, content, token, name, memberId }}: any) =>
{
  useGoogleFonts();
  const getTranslation = (key: any) => {
    const language = localStorage.getItem('i18nextLng') || 'en';
    return translations[language]?.[key] || translations['en'][key];
  };
  useEffect(() => {
    const overLay = document.querySelector('.overlay-popups');
    const normalClose = document.querySelector('.close-btn');
    console.log(overLay, normalClose);
    overLay?.addEventListener('click', () => {
      closePopupWithoutHeyServer();
    });
    normalClose?.addEventListener('click', () => {
      closePopupWithoutHeyServer();
    });
    const buttons:any = document.querySelectorAll('.btn-234-custom');
    buttons.forEach(function (button:any) {
      if (button.style.pointerEvents !== undefined) {
        button.style.pointerEvents = 'auto';
      }
    });
    const dontShowAgainText = getTranslation('dont_show_again');
    const dontShowAgainButton:any = document.querySelector('.dont-show-again');
    if (dontShowAgainButton) {
      dontShowAgainButton.textContent = dontShowAgainText;
    }
    const replyInput:any= document.querySelector('.comment-input');
    if (replyInput) {
      const replyCommentText = getTranslation('write_a_replay');
      replyInput.placeholder = replyCommentText;
    }
    dontShowAgainButton?.addEventListener('click', async () => {
      dontShowAgainButton.disabled = true;
      window.localStorage.setItem('currentPopupPriority', '0');
      await postReact(
        {
          name,
          code: 'x-close',
          participatorId: memberId,
        },
        `/popups/${id}/reacts`,
        token,
      );
      closePopup();
    });
  const form = document.querySelector('.popup-comment-form');
  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const commentValue = document.querySelector('.comment-input')?.value;

    if (commentValue) {
      window.localStorage.setItem('currentPopupPriority', '0');
      await postComment(
        {
          name,
          body: commentValue,
          participatorId: memberId,
        },
        `/popups/${id}/comments`,
        token
      );
      closePopup();
      // socket.emit("hey-server-web", { dataOfUser, href: window.location.href });
    }
  });
  const emojiButtons = document.querySelectorAll('.emoji-btn');
  emojiButtons.forEach((emojiButton) => {
    emojiButton?.addEventListener('click', async () => {
      const name = emojiButton.textContent;
      window.localStorage.setItem('currentPopupPriority', '0');
      await postReact(
        { name, code: name, participatorId: memberId },
        `/popups/${id}/reacts`,
        token
      );
      closePopup();
      // socket.emit("hey-server-web", { dataOfUser, href: window.location.href });
    });
  });
  }, []);
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  )
};

export default PopupService;

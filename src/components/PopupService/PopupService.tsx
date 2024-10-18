// @ts-nocheck
import { useEffect } from 'react';
import { closePopup, closePopupWithoutHeyServer } from '../../utils/closePopup';
import { translations } from '../../utils/translation';
import { postComment, postReact } from '../../api/interaction';
import {
  getElementByClass,
  getManyElementByClass,
} from '../../utils/getElement';

const PopupService = ({
  response: {
    id,
    content,
    userBaseInfo: { memberId, name },
  },
}: any) => {
  const getTranslation = (key: any) => {
    const language = localStorage.getItem('i18nextLng') || 'en';
    return translations[language]?.[key] || translations['en'][key];
  };
  useEffect(() => {
    const overLay = getElementByClass('overlay-popups');
    const normalClose = getElementByClass('close-btn');
    overLay?.addEventListener('click', () => {
      closePopupWithoutHeyServer();
    });
    normalClose?.addEventListener('click', () => {
      closePopupWithoutHeyServer();
    });
    const buttons: any = getManyElementByClass('btn-234-custom');
    buttons.forEach(function (button: any) {
      if (button.style.pointerEvents !== undefined) {
        button.style.pointerEvents = 'auto';
      }
    });

    const sendBtn = getElementByClass('btn-send-comment');
    const lang = window.localStorage.getItem('i18nextLng');
    if (sendBtn && lang === 'ar') {
      sendBtn.style.rotate = '180deg';
    }
    const dontShowAgainText = getTranslation('dont_show_again');
    const dontShowAgainButton: any = getElementByClass('dont-show-again');
    if (dontShowAgainButton) {
      dontShowAgainButton.textContent = dontShowAgainText;
    }
    const replyInput: any = getElementByClass('comment-input');
    if (replyInput) {
      const replyCommentText = getTranslation('write_a_replay');
      replyInput.placeholder = replyCommentText;
    }
    dontShowAgainButton?.addEventListener('click', async () => {
      dontShowAgainButton.disabled = true;
      closePopup({ name, memberId }).then(() => {
        postReact(
          {
            name,
            code: 'x-close',
            participatorId: memberId,
            message_id: id,
          },
          `/client-api/messages/reaction`
        );
      });
    });
    const form = getElementByClass('popup-comment-form');
    form?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const commentValue = getElementByClass('comment-input')?.value;

      if (commentValue) {
        closePopup({ name, memberId }).then(() =>
          postComment(
            {
              name,
              body: commentValue,
              participatorId: memberId,
              message_id: id,
            },
            `/client-api/messages/comment`
          )
        );
      }
    });
    const emojiButtons = getManyElementByClass('emoji-btn');
    emojiButtons.forEach((emojiButton) => {
      emojiButton?.addEventListener('click', async () => {
        const emojiIcon = emojiButton.textContent;
        await closePopup({ name, memberId });
        await postReact(
          {
            name,
            code: emojiIcon,
            participatorId: memberId,
            message_id: id,
          },
          `/client-api/messages/reaction`
        );
      });
    });
    const swiperWrapper = getElementByClass('swiper-wrapper');
    const prevButton = getElementByClass('taki-popups-prev-btn');
    const nextButton = getElementByClass('taki-popups-next-btn');
    const popupReply = getElementByClass('taki-popups-reply');
    const swiperLength = getManyElementByClass('swiper-slide').length;
    const navigationPoints = getManyElementByClass(
      'taki-popups-navigation-point'
    );
    let currentIndex = 0;
    if (swiperLength > 1) {
      navigationPoints[currentIndex].style.background = '#331';
    }
    function resetPoint(i) {
      navigationPoints?.forEach((el) => (el.style.background = ''));
      navigationPoints[i].style.background = '#331';
    }
    navigationPoints?.forEach((el, i) =>
      el.addEventListener('click', () => {
        currentIndex = i;
        resetPoint(currentIndex);
        el.style.background = '#331';
        showSlide(i);
        if (i === swiperLength - 1) {
          nextButton.style.opacity = '0.5';
        } else if (i === 0) {
          prevButton.style.opacity = '0.5';
        } else {
          prevButton.style.opacity = '1';
          nextButton.style.opacity = '1';
        }
      })
    );
    if (prevButton) prevButton.style.opacity = '0.5';
    if (swiperLength > 1 && popupReply) {
      popupReply.style.opacity = '0';
    }
    function showSlide(index) {
      resetPoint(index);
      if (swiperLength - 1 === index && popupReply) {
        popupReply.style.opacity = '1';
        popupReply.style.transition = '0.3s';
      }
      if (swiperLength - 1 !== index && popupReply) {
        popupReply.style.opacity = '0';
        popupReply.style.transition = '0.3s';
      }
      const slideElement = getElementByClass('swiper-slide');
      if (slideElement !== null && swiperWrapper !== null) {
        const slideWidth = slideElement.offsetWidth;
        swiperWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
        swiperWrapper.style.transition = '0.5s ease-in-out';
      }
    }
    function prevSlide() {
      if (currentIndex !== 0) {
        nextButton.style.opacity = '1';
        currentIndex = (currentIndex - 1 + swiperLength) % swiperLength;
        showSlide(currentIndex);
      }
      if (currentIndex === 0) {
        prevButton.style.opacity = '0.5';
      }
    }
    function nextSlide() {
      if (currentIndex !== swiperLength - 1) {
        prevButton.style.opacity = '1';
        currentIndex = (currentIndex + 1) % swiperLength;
        showSlide(currentIndex);
      }
      if (currentIndex === swiperLength - 1) {
        nextButton.style.opacity = '0.5';
      }
    }
    prevButton?.addEventListener('click', prevSlide);
    nextButton?.addEventListener('click', nextSlide);
  }, []);
  return <div className='popup_service_wrapper_container' popup-id={id} dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PopupService;

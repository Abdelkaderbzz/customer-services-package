// @ts-nocheck
import { useEffect } from 'react';
import useGoogleFonts from '../../hooks/useGoogleFonts';
import { closePopup, closePopupWithoutHeyServer } from '../../utils/closePopup';
import { translations } from '../../utils/translation';
import { postComment, postReact } from '../../api/interaction';

const PopupService = ({
  response: { id, priority, content, token, dataOfUser },
}: any) => {
  useGoogleFonts();
  const getTranslation = (key: any) => {
    const language = localStorage.getItem('i18nextLng') || 'en';
    return translations[language]?.[key] || translations['en'][key];
  };
  useEffect(() => {
    const overLay = document.querySelector('.overlay-popups');
    const normalClose = document.querySelector('.close-btn');
    overLay?.addEventListener('click', () => {
      closePopupWithoutHeyServer();
    });
    normalClose?.addEventListener('click', () => {
      closePopupWithoutHeyServer();
    });
    const buttons: any = document.querySelectorAll('.btn-234-custom');
    buttons.forEach(function (button: any) {
      if (button.style.pointerEvents !== undefined) {
        button.style.pointerEvents = 'auto';
      }
    });
    const dontShowAgainText = getTranslation('dont_show_again');
    const dontShowAgainButton: any = document.querySelector('.dont-show-again');
    if (dontShowAgainButton) {
      dontShowAgainButton.textContent = dontShowAgainText;
    }
    const replyInput: any = document.querySelector('.comment-input');
    if (replyInput) {
      const replyCommentText = getTranslation('write_a_replay');
      replyInput.placeholder = replyCommentText;
    }
    dontShowAgainButton?.addEventListener('click', async () => {
      dontShowAgainButton.disabled = true;
      window.localStorage.setItem('', '0');
      await postReact(
        {
          name: dataOfUser?.name,
          code: 'x-close',
          participatorId: dataOfUser?.memberId,
        },
        `/popups/${id}/reacts`,
        token
      ).then(() => closePopup(dataOfUser));
    });
    const form = document.querySelector('.popup-comment-form');
    form?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const commentValue = document.querySelector('.comment-input')?.value;

      if (commentValue) {
        window.localStorage.setItem('popupPriority', '0');
        await postComment(
          {
            name: dataOfUser?.name,
            body: commentValue,
            participatorId: dataOfUser?.memberId,
          },
          `/popups/${id}/comments`,
          token
        ).then(() => closePopup(dataOfUser));
        // socket.emit("hey-server-web", { dataOfUser, href: window.location.href });
      }
    });
    const emojiButtons = document.querySelectorAll('.emoji-btn');
    emojiButtons.forEach((emojiButton) => {
      emojiButton?.addEventListener('click', async () => {
        const name = emojiButton.textContent;
        window.localStorage.setItem('popupPriority', '0');
        await postReact(
          {
            name: dataOfUser?.name,
            code: name,
            participatorId: dataOfUser?.memberId,
          },
          `/popups/${id}/reacts`,
          token
        ).then(() => closePopup(dataOfUser));
        // socket.emit("hey-server-web", { dataOfUser, href: window.location.href });
      });
    });
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const prevButton = document.querySelector('.taki-popups-prev-btn');
    const nextButton = document.querySelector('.taki-popups-next-btn');
    const popupReply = document.querySelector('.taki-popups-reply');
    const swiperLength = document.querySelectorAll('.swiper-slide').length;
    const navigationPoints = document.querySelectorAll(
      '.taki-popups-navigation-point'
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
      const slideElement = document.querySelector('.swiper-slide');
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
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PopupService;

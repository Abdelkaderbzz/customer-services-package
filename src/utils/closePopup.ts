export const closePopup = () => {
  closePopupWithoutHeyServer();
  window.localStorage.setItem('popupPriority', '0');
  //dataOfUser['href'] = window.location.href;
  // socket.emit('hey-server-web', dataOfUser);
};
export const closePopupWithoutHeyServer = () => {
  document.querySelector('.popup-taki')?.remove();
  document.querySelector('.overlay-popups')?.remove();
};

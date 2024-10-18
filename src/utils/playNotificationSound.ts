import notificationSound from "../assets/notifAudio.wav";

// const notificationSound =
//   "https://res.cloudinary.com/dpnk3zkdw/video/upload/v1729007496/popups/notifAudio_vvie8i.wav";

export const playNotificationSound = () => {
  const audio = new Audio(notificationSound);
  return audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

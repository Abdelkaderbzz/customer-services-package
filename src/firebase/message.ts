import { onMessage } from "firebase/messaging";
import { messaging } from "./firebaseConfig";
import notificationSound from "../assets/notifAudio.wav";

export const playNotificationSound = () => {
  const audio = new Audio(notificationSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export function onMessageListener() {
  onMessage(messaging, (payload) => {
    const title = payload.data?.title || "";
    const options = {
      body: payload.data?.body,
      icon: payload.data?.icon,
    };

    if (Notification.permission === "granted") {
      const notification = new Notification(title, options);
      playNotificationSound();

      notification.onclick = (e) => {
        e.preventDefault();
        window.open("https://www.youtube.com/");
        notification.close();
      };
    } else {
      console.log("App is not in the foreground, suppressing notification.");
    }
  });
}

import { onMessage } from 'firebase/messaging';
import { messaging } from './firebaseConfig';
import Icon from '../assets/icon.png';
import { playNotificationSound } from '../utils/playNotificationSound';


export function onMessageListener() {
  onMessage(messaging, (payload) => {
    const title = payload.data?.title || '';
    const options = {
      body: payload.data?.body,
      icon: payload.data?.icon || Icon,
      tag: 'background-notification',
      renotify: true,
    };

    if (Notification.permission === 'granted') {
      const notification = new Notification(title, options);
      playNotificationSound();

      const notificationTimeout = setTimeout(() => {
        notification.close();
      }, 60000);

      notification.onclick = (e) => {
        e.preventDefault();
        notification.close();
        window.open(window.location.href);
      };

      notification.onclose = () => {
        clearTimeout(notificationTimeout);
      };
    }
    // else {
    //   console.log("App is not in the foreground, suppressing notification.");
    // }
  });
}

import { getToken } from "firebase/messaging";
import axios from "axios";
import { messaging } from "./firebaseConfig";



export async function requestPermission(dataOfUser: any){
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    try {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
      });
      if (token) {
        sendTokenToServer({...dataOfUser,token});
      } else {
        alert("Token is not generated yet");
      }
    } catch (error) {
      console.error("Error retrieving token: ", error);
    }
  } else if (permission === "denied") {
    alert("You denied for the notification");
  }
}

export const sendTokenToServer = async (dataOfUser:any) => {
  return await axios
    .post(import.meta.env.VITE_APP_SUBSCRIBE_URL, dataOfUser)
    .then((response) => {
      console.log('Subscribed successfully', response);
    })
    .catch((error) => {
      console.error('Error subscribing', error);
    });
};

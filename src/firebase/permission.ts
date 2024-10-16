import { getToken } from 'firebase/messaging';
import axios from 'axios';
import { messaging } from './firebaseConfig';
import {
  dbName,
  storeName,
  subscribingUrl,
  userKey,
  vapidKey,
} from '../config/config';
import { DeepEqualObject } from '../utils/deepEqual';
import { saveToDB } from '../utils/indexedDB';


declare global {
  interface Window {
    UserDetails: DeepEqualObject;
  }
}

export async function requestPermission(currentUser: DeepEqualObject) {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    try {
      const token = await getToken(messaging, {
        vapidKey: vapidKey,
      });
      if (token) {
        sendTokenToServer(token, currentUser);
      } else {
        console.log('No token received.');
      }
    } catch (error) {
      console.log('Error retrieving token: ', error);
    }
  } else if (permission === 'denied') {
    console.log('You denied for the notification');
  }
}

export const sendTokenToServer = async (
  token: string,
  currentUser: DeepEqualObject
) => {
  const newCurrentUser = {
    ...currentUser,
    token,
  };

  return await axios
    .post(subscribingUrl, newCurrentUser)
    .then(async () => {
      await saveToDB(dbName, storeName, { id: userKey, ...currentUser });
    })
    .catch((error) => {
      console.error('Error subscribing', error);
    });
};

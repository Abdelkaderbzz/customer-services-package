import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} from '../config/config';

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

const fapp = initializeApp(firebaseConfig);

export const messaging = getMessaging(fapp);

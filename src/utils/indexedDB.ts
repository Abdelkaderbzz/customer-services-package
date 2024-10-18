import { dbName, key, storeName } from "../types/types";
import { DeepEqualObject } from "./deepEqual";

export const openIndexedDB = (dbName: dbName, storeName: storeName) => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const getFromDB = async (
  dbName: dbName,
  storeName: storeName,
  key: key
) => {
  const db = await openIndexedDB(dbName, storeName);
  return new Promise<DeepEqualObject>((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.get(key);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const saveToDB = async (
  dbName: dbName,
  storeName: storeName,
  data: DeepEqualObject
) => {
  const db = await openIndexedDB(dbName, storeName);
  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    const request = store.put(data);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

import { dbName, storeName, userKey } from "../config/config";
import { DeepEqualObject, deepEqual } from "../utils/deepEqual";
import { getFromDB } from "../utils/indexedDB";
import { requestPermission } from "./permission";

export const checkAndRequestPermission = async (currentUser:DeepEqualObject) => {

  if (currentUser) {
    const storedUser = await getFromDB(dbName, storeName, userKey);
    const result = deepEqual(storedUser, { id: userKey, ...currentUser });

    if (!storedUser || !result) {
      requestPermission(currentUser);
    }
    // else {
    //   console.log("Already Have permission Yeat");
    // }
  } else {
    console.log('No user data available.');
  }
};

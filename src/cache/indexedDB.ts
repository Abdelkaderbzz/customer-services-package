import Dexie, { Table } from 'dexie';
import { dumyDataPopups } from './../file';

class TodoDatabase extends Dexie {
  popups!: Table<any, any>;

  constructor() {
    super('taki-popups-db');
    this.version(1).stores({
      popups: '++id,priority,id,url',
    });
  }
}

const db = new TodoDatabase();

export const savePopupInIndexedDb = () => {
  dumyDataPopups.map((popup) => db.popups.add(popup));
};

// Function to fetch all popups
export const fetchPopupsWithUrlFromIndexedDb = async () => {
  try {
    const popups = await db.popups.filter(obj => obj.url).toArray();
    console.log(popups);
    return popups;
  } catch (error) {
    console.error('Failed to fetch popups:', error);
    return [];
  }
};
export const fetchPopupsUsingUrl = async (url:string) => {
  try {
    const popups = await db.popups.where('url')
      .equals(url).limit(1)
      .toArray();
    console.log(popups);
    return popups;
  } catch (error) {
    console.error('Failed to fetch popups:', error);
    return [];
  }
};
export const fetchPopupsWithoutUrlFromIndexedDb = async () => {
  try {
    const popups = await db.popups.filter(obj => !obj.url).toArray();
    console.log(popups)
    return popups;
  } catch (error) {
    console.error('Failed to fetch popups:', error);
    return [];
  }
};

// Function to delete a popup by id
export const deletePopupFromIndexedDb = async (id: number) => {
  try {
    await db.popups.delete(id);
    console.log(`Popup with id ${id} deleted successfully`);
  } catch (error) {
    console.error(`Failed to delete popup with id ${id}:`, error);
  }
};
export const fetchFirstPopup = async () => {
  try {
    const firstPopup = await db.popups
      .limit(1) // Limit the results to 1
      .toArray(); // Convert the results to an array

    return firstPopup[0]; // Return the first object if it exists
  } catch (error) {
    console.error('Failed to fetch the first popup:', error);
    return null; // Return null on error
  }
};
export const deleteFirstPopup = async () => {
  try {
    // Fetch the first popup to get its ID
    const firstPopup = await fetchFirstPopup(); // Reuse the fetchFirstPopup function
    if (firstPopup) {
      const id = firstPopup.id; // Get the ID of the first popup
      await db.popups.delete(id); // Delete the popup by ID
      console.log(`Popup with id ${id} deleted successfully.`);
    } else {
      console.log('No popups found to delete.');
    }
  } catch (error) {
    console.error('Failed to delete the first popup:', error);
  }
};
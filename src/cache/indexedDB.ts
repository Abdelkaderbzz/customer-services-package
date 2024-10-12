import Dexie, { Table } from 'dexie';
import { dumyDataPopups } from '../popup';
import { bannersArray } from '../banner';

class TodoDatabase extends Dexie {
  popups!: Table<any, any>;
  banners!: Table<any, any>;

  constructor() {
    super('taki-popups-db');
    this.version(1).stores({
      popups: '++id,priority,id,url',
      banners: '++id,priority,id',
    });
  }
}

const db = new TodoDatabase();

export const savePopupInIndexedDb = () => {
  dumyDataPopups.map((popup) => db.popups.add(popup));
};
export const saveBannersInIndexedDb = () => {
  bannersArray.map((banner) => db.banners.add(banner));
};

// Function to fetch all popups
export const fetchPopupsWithUrlFromIndexedDb = async () => {
  try {
    const popups = await db.popups.filter((obj) => obj.url).toArray();
    console.log(popups);
    return popups;
  } catch (error) {
    console.error('Failed to fetch popups:', error);
    return [];
  }
};
export const fetchPopupsUsingUrl = async (url: string) => {
  try {
    const popups = await db.popups.where('url').equals(url).limit(1).toArray();
    console.log(popups);
    return popups;
  } catch (error) {
    console.error('Failed to fetch popups:', error);
    return [];
  }
};
export const fetchPopupsWithoutUrlFromIndexedDb = async () => {
  try {
    const popups = await db.popups.filter((obj) => !obj.url).toArray();
    console.log(popups);
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
export const deleteBannerFromIndexedDb = async (id: number) => {
  try {
    await db.banners.delete(id);
    console.log(`Banner with id ${id} deleted successfully`);
  } catch (error) {
    console.error(`Failed to delete banner with id ${id}:`, error);
  }
};
export const fetchFirstPopup = async () => {
  try {
    const firstPopup = await db.popups.limit(1).toArray();

    return firstPopup[0];
  } catch (error) {
    console.error('Failed to fetch the first popup:', error);
    return null;
  }
};
export const fetchFirstBanner = async () => {
  try {
    const firstBanner = await db.banners.limit(1).toArray();
    return firstBanner[0];
  } catch (error) {
    console.error('Failed to fetch the first popup:', error);
    return null;
  }
};
export const deleteFirstPopup = async () => {
  try {
    const firstPopup = await fetchFirstPopup();
    if (firstPopup) {
      const id = firstPopup.id;
      await db.popups.delete(id);
      console.log(`Popup with id ${id} deleted successfully.`);
    } else {
      console.log('No popups found to delete.');
    }
  } catch (error) {
    console.error('Failed to delete the first popup:', error);
  }
};
export const deleteFirstBanner = async () => {
  try {
    const firstBanner = await fetchFirstBanner();
    if (firstBanner) {
      const id = firstBanner.id;
      await db.banners.delete(id);
      console.log(`Banner with id ${id} deleted successfully.`);
    } else {
      console.log('No banners found to delete.');
    }
  } catch (error) {
    console.error('Failed to delete the first banner:', error);
  }
};

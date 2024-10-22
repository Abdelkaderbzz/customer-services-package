import Dexie, { Table } from 'dexie';

class TodoDatabase extends Dexie {
  popups!: Table<any, any>;
  banners!: Table<any, any>;

  constructor(dbName: string) {
    super(`taki_popups_${dbName}`);
    this.version(1).stores({
      popups: '++id,priority,id,url',
      banners: '++id,createdAt,banner_id,settings.priority',
    });
  }
}

let db: TodoDatabase;

export const initializeDb = (userId: string) => {
  db = new TodoDatabase(userId);
};

//! POPUP DB METHODS ----------------------------------------------------------------
export const savePopupInIndexedDb = (popups: any) => {
  popups.map((popup: any) => db.popups.add(popup));
};
export const clearPopupsStore = async () => {
  try {
    await db.popups.clear();
  } catch (error) {
    console.error('Error while clearing popups store:', error);
  }
};

export const fetchPopupsUsingUrl = async (url: string) => {
  try {
    const popups = await db.popups.where('url').equals(url).limit(1).toArray();
    return popups;
  } catch (error) {
    console.error('Failed to fetch popups:', error);
    return [];
  }
};

export const deletePopupFromIndexedDb = async (
  id: string | null | undefined
) => {
  try {
    await db.popups.delete(id);
  } catch (error) {
    console.error(`Failed to delete popup with id ${id}:`, error);
  }
};

export const fetchFirstPopup = async () => {
  try {
    const popups = await db.popups.toArray();
    return popups.length ? popups[popups.length - 1] : null;
  } catch (error) {
    console.error('Failed to fetch the last popup:', error);
    return null;
  }
};

export const deleteManyPopup = async (popupIds: string[]) => {
  try {
    popupIds?.map(async (id: string) => {
      await db.popups.delete(id);
    });
  } catch (error) {
    console.error('Failed to delete the popups:', error);
  }
};

export const putPopupInCorrectPlace = async (newPopup: any) => {
  try {
    const existingPopups = await db.popups.toArray();

    let inserted = false;
    for (let i = 0; i < existingPopups.length; i++) {
      if (newPopup.priority >= existingPopups[i].priority) {
        await db.popups.add(newPopup);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      await db.popups.add(newPopup);
    }
  } catch (error) {
    console.error('Error adding popup:', error);
  }
};
//! BANNER DB METHODS ----------------------------------------------------------------

//? save many banners in indexedDB

export const saveBannersInIndexedDb = (banners: any) => {
  banners.map((banner: any) => db.banners.add(banner));
};

//? clear banner store

export const clearBannerStore = async () => {
  try {
    await db.banners.clear();
  } catch (error) {
    console.error('Error while clearing banners store:', error);
  }
};

//? fetch the banner to show

export const fetchFirstBanner = async () => {
  try {
    const banners = await db.banners
      .where('settings.priority')
      .belowOrEqual(2)
      .reverse()
      .toArray();
    banners.sort((a, b) => b.createdAt - a.createdAt);

    return banners[0];
  } catch (error) {
    console.error('Failed to fetch the last banner:', error);
    return null;
  }
};

//? Delete Many bannerById

export const deleteManyBanners = async (bannersIds: string[]) => {
  try {
    bannersIds?.map(async (id: string) => {
      await db.banners.where('banner_id').equals(id).delete();
    });
  } catch (error) {
    console.error('Failed to delete the banners:', error);
  }
};

//? Delete bannerById
export const deleteByBannerId = async (id: string | null | undefined) => {
  try {
    if (id) {
      await db.banners.where('banner_id').equals(id).delete();
    }

    console.log('No banners found to delete.');
  } catch (error) {
    console.error('Failed to delete the first banner:', error);
  }
};

//? add banner to indexed db

export const addBannerToIndexedDb = async (banner: any) => {
  try {
    await db.banners.add(banner);
  } catch (error) {
    console.error('Failed to add the banner:', error);
  }
};

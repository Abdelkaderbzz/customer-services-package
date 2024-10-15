import Dexie, { Table } from 'dexie';

class TodoDatabase extends Dexie {
  popups!: Table<any, any>;
  banners!: Table<any, any>;

  constructor() {
    super('taki-popups-db');
    this.version(1).stores({
      popups: '++id,priority,id,url',
      banners: '++id,createdAt,banner_id,settings.priority',
    });
  }
}

const db = new TodoDatabase();

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
export const clearBannerStore = async () => {
  try {
    await db.banners.clear();
  } catch (error) {
    console.error('Error while clearing banners store:', error);
  }
};
export const saveBannersInIndexedDb = (banners: any) => {
  banners.map((banner: any) => db.banners.add(banner));
};

// Function to fetch all popups
export const fetchPopupsWithUrlFromIndexedDb = async () => {
  try {
    const popups = await db.popups.filter((obj) => obj.url).toArray();
    return popups;
  } catch (error) {
    console.error('Failed to fetch popups:', error);
    return [];
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
export const fetchPopupsWithoutUrlFromIndexedDb = async () => {
  try {
    const popups = await db.popups.filter((obj) => !obj.url).toArray();
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
  } catch (error) {
    console.error(`Failed to delete popup with id ${id}:`, error);
  }
};
export const deleteBannerFromIndexedDb = async (id: number) => {
  try {
    await db.banners.delete(id);
  } catch (error) {
    console.error(`Failed to delete banner with id ${id}:`, error);
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
export const deleteFirstPopup = async () => {
  try {
    const firstPopup = await fetchFirstPopup();
    if (firstPopup) {
      const id = firstPopup.id;
      await db.popups.delete(id);
    } else {
      console.log('No popups found to delete.');
    }
  } catch (error) {
    console.error('Failed to delete the first popup:', error);
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
export const deleteManyBanners = async (bannersIds: string[]) => {
  try {
    bannersIds?.map(async (id: string) => {
      await db.banners.where('banner_id').equals(id).delete();
    });
  } catch (error) {
    console.error('Failed to delete the banners:', error);
  }
};
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
export const putBannerInCorrectPlace = async (newBanner: any) => {
  try {
    const existingBanners = await db.banners.toArray();

    let inserted = false;
    for (let i = 0; i < existingBanners.length; i++) {
      if (newBanner.settings.priority >= existingBanners[i].settings.priority) {
        await db.banners.add(newBanner);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      await db.banners.add(newBanner);
    }
  } catch (error) {
    console.error('Error adding banner:', error);
  }
};

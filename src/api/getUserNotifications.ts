const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
export const getUserNotifications = async (body: any) => {
  try {
    const response = await fetch(BASE_URL + '/client-api/me', {
      method: 'POST',
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
export const getVersion = async (appId: string) => {
  try {
    const response = await fetch(BASE_URL + '/client-api/version', {
      method: 'GET',
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
        'x-client-id':appId
      },
    });
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

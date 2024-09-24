const BASE_URL = import.meta.env.VITE_APP_BASE_URL + '/api';
const SUBSCRIBE_URL = import.meta.env.VITE_APP_BASE_URL;

export const postComment = async (body:any, endPoint:string, popupToken:string) => {
  try {
    const response = await fetch(BASE_URL + endPoint, {
      method: 'POST',
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${popupToken}`,
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};
export const postReact = async (body:any, endPoint:string, popupToken:string) => {
  try {
    const response = await fetch(BASE_URL + endPoint, {
      method: 'POST',
      headers: {
        Accept: '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${popupToken}`,
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};
export const subscribeUser = async (body:any, endPoint:string) => {
  try {
    const response = await fetch(SUBSCRIBE_URL + endPoint, {
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

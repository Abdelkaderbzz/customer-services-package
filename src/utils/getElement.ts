export const getElementByClass = (className:string) => {
  const shadowHost = document.querySelector('#popup-service-container');

  if (!shadowHost) {
    console.error('Shadow host not found');
    return null;
  }

  const shadowRoot = shadowHost.shadowRoot;

  if (!shadowRoot) {
    console.error('Shadow root not found');
    return null;
  }
  
  const element = shadowRoot.querySelector(`.${className}`);

  return element || null;
};
export const getManyElementByClass = (className:string) => {
  const shadowHost = document.querySelector('#popup-service-container');

  if (!shadowHost) {
    console.error('Shadow host not found');
    return null;
  }

  const shadowRoot = shadowHost.shadowRoot;

  if (!shadowRoot) {
    console.error('Shadow root not found');
    return null;
  }

  const element = shadowRoot.querySelectorAll(`.${className}`);

  return element || null;
};

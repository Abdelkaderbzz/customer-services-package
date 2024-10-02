
import { emitEvent } from '../utils/socket';

const useUrl = (dataOfUser: any) => {
  let currentUrl = window.location.href;
  document.body.addEventListener(
    'click',
    () => {
      requestAnimationFrame(() => {
        if (currentUrl !== window.location.href) {
          console.log({ ...dataOfUser, url: window.location.href });
          emitEvent('hey-server-web', {
            ...dataOfUser,
            url: window.location.href,
          });
          currentUrl = window.location.href;
        }
      });
    },
    true
  );
};

export default useUrl;

import { useEffect } from 'react';

const useGoogleFonts = () => {
  useEffect(() => {
    const fontsToLoad = [];

    if (document.fonts.check('1em Cairo')) {
      fontsToLoad.push('Cairo:wght@200..1000');
    }

    if (document.fonts.check('1em Tajawal')) {
      fontsToLoad.push('Tajawal:wght@200;300;400;500;700;800;900');
    }

    if (document.fonts.check('1em Poppins')) {
      fontsToLoad.push('Poppins:wght@200;300;400;500;600;700;800;900');
    }

    // If there's any font to load, create a <link> tag and append it
    if (fontsToLoad.length > 0) {
      const linkElement = document.createElement('link');
      linkElement.setAttribute(
        'href',
        `https://fonts.googleapis.com/css2?family=${fontsToLoad.join(
          '&family='
        )}&display=swap`
      );
      linkElement.setAttribute('rel', 'stylesheet');
      document.head.appendChild(linkElement);
    }
  }, []);

  return null;
};

export default useGoogleFonts;

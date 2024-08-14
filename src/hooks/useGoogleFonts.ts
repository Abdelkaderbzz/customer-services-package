const useGoogleFonts = () => {
  if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
    const linkElement = document.createElement('link');
    linkElement.setAttribute(
      'href',
      'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap'
    );
    linkElement.setAttribute('rel', 'stylesheet');
    document.head.appendChild(linkElement);
  }

  return null;
};

export default useGoogleFonts;

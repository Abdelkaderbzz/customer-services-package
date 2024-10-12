import ReactDOM from 'react-dom/client';
import PopupService from '../components/PopupService/PopupService';
import BannerService from '../components/BannerService/BannerService';

export const renderService = ({ response, serviceType, dataOfUser }: any) => {
  const serviceComponents: { [key: string]: React.FC<any> } = {
    popup: PopupService,
    banner: BannerService,
  };

  const ServiceComponent = serviceComponents[serviceType];

  if (!ServiceComponent) return;

  let shadowHost = document.getElementById('popup-service-container');

  if (!shadowHost) {
    shadowHost = document.createElement('div');
    shadowHost.id = 'popup-service-container';
    document.body.appendChild(shadowHost);
  }

  let shadowRoot = shadowHost.shadowRoot;
  if (!shadowRoot) {
    shadowRoot = shadowHost.attachShadow({ mode: 'open' });
  }

  // Create a unique container for each service type
  let serviceContainer = shadowRoot.getElementById(
    `shadow-container-${serviceType}`
  );
  if (!serviceContainer) {
    serviceContainer = document.createElement('div');
    serviceContainer.id = `shadow-container-${serviceType}`; // Unique ID per service type
    shadowRoot.appendChild(serviceContainer);
  }

  const root = ReactDOM.createRoot(serviceContainer);
  root.render(<ServiceComponent response={{ ...response, dataOfUser }} />);
};

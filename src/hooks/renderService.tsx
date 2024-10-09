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

  // Attach Shadow DOM
  let shadowRoot = shadowHost.shadowRoot;
  if (!shadowRoot) {
    shadowRoot = shadowHost.attachShadow({ mode: 'open' });
  }

  // Create a new div to render the React component into
  let shadowContainer = shadowRoot.getElementById('shadow-container');
  if (!shadowContainer) {
    shadowContainer = document.createElement('div');
    shadowContainer.id = 'shadow-container';
    shadowRoot.appendChild(shadowContainer);
  }

  // Render React component in the shadow DOM container
  const root = ReactDOM.createRoot(shadowContainer);
  root.render(<ServiceComponent response={{ ...response, dataOfUser }} />);
};

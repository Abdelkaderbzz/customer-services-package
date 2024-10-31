import { ParentComponent } from './ParentComponent';
import { ITakiPopupsProps } from './TakiPopups.types';
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { getGuestId, getGuestName } from '../utils/generateRandomStrings';

export function TakiPopups({
  name,
  appId,
  memberId,
  meta_data,
  guest_mode,
}: ITakiPopupsProps) {
  useEffect(() => {
    const App = () => {
      const props = guest_mode
        ? { appId, name: getGuestName(), memberId: getGuestId(), meta_data: {} }
        : memberId
        ? { appId, name, memberId, meta_data }
        : null;

      return props ? <ParentComponent {...props} /> : null;
    };

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    root.render(<App />);

    return () => {
      root.unmount();
      document.body.removeChild(container);
    };
  }, [name, appId, memberId, meta_data]);
}

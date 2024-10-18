import { ParentComponent } from './ParentComponent';
import { ITakiPopupsProps } from './TakiPopups.types';
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';

export function TakiPopups({
  name,
  appId,
  memberId,
  meta_data,
}: ITakiPopupsProps) {
  useEffect(() => {
    const App = () => {
      return (
        <ParentComponent
          name={name}
          appId={appId}
          memberId={memberId}
          meta_data={meta_data}
        />
      );
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

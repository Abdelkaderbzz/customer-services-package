import { useEffect } from 'react';
import { ITakiPopupsProps, TakiPopups } from './package/TakiPopups';
import { socketManager } from './utils/socket';

function App() {
  const name = 'adem';
  const memberId = '546363546';
  const meta_data = {
    age: 18,
    state: 'manouba',
    city: 'manouba',
  };
  useEffect(() => {
    socketManager._connectSocket();
  }, []);
  return (
    <div className='App'>
      <TakiPopups name={name} memberId={memberId} meta_data={meta_data} />
    </div>
  );
}

export default App;

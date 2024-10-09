import { useState } from 'react';
import {
  fetchPopupsUsingUrl,
  fetchPopupsWithUrlFromIndexedDb,
  fetchPopupsWithoutUrlFromIndexedDb,
} from './cache/indexedDB';
import { TakiPopups } from './package/TakiPopups';

function App() {
  const name = 'adem';
  const memberId = '546363546';
  const meta_data = {
    age: 18,
    state: 'manouba',
    city: 'manouba',
  };
  const [state, setstate] = useState('');
  return (
    <div className='App'>
      hello world
      <input
        type='text'
        value={state}
        onChange={(e) => setstate(e.target.value)}
      />
      <TakiPopups name={name} memberId={memberId} meta_data={meta_data} />
      <br />
      <button onClick={() => fetchPopupsWithUrlFromIndexedDb()}>
        fetch popups with route
      </button>
      <br />
      <br />
      <button onClick={() => fetchPopupsWithoutUrlFromIndexedDb()}>
        fetch popups without route
      </button>
      <button onClick={() => fetchPopupsUsingUrl(state)}>
        fetch specific url
      </button>
      <br />
      <br />
      <button onClick={() => (window.location.href = '/token')}>
        /token
      </button>
      <button onClick={() => (window.location.href = '/about')}>
        /about
      </button>
      <button onClick={() => (window.location.href = '/fss')}>
        /fss
      </button>
      <button onClick={() => (window.location.href = '/fss')}>
        /notfount
      </button>
    </div>
  );
}

export default App;

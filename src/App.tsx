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
  const appId = '6707cea74bb19ce9ec9c068b';
  const meta_data = {
    age: 18,
    state: 'manouba',
    city: 'manouba',
  };
  const [state, setstate] = useState('');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
      className='App'
    >
      <div className='container'>
        hello world
        <input
          type='text'
          value={state}
          onChange={(e) => setstate(e.target.value)}
        />
        <TakiPopups appId={appId} name={name} memberId={memberId} meta_data={meta_data} />
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
        <button onClick={() => (window.location.href = '/fss')}>/fss</button>
        <button onClick={() => (window.location.href = '/fss')}>
          /notfount
        </button>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
        incidunt, voluptatem placeat distinctio ad alias corporis voluptatum
        tempora possimus vero at, minima, eos dolores molestias illum saepe
        nobis eligendi? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus ratione accusamus molestias totam porro fugiat adipisci
        dolore nobis, soluta minus qui, exercitationem corrupti mollitia ipsa,
        magni repudiandae. Dolorem, sed hic! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Velit nam incidunt, voluptatem placeat
        distinctio ad alias corporis voluptatum tempora possimus vero at,
        minima, eos dolores molestias illum saepe nobis eligendi? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Ducimus ratione accusamus
        molestias totam porro fugiat adipisci dolore nobis, soluta minus qui,
        exercitationem corrupti mollitia ipsa, magni repudiandae. Dolorem, sed
        hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
        incidunt, voluptatem placeat distinctio ad alias corporis voluptatum
        tempora possimus vero at, minima, eos dolores molestias illum saepe
        nobis eligendi? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus ratione accusamus molestias totam porro fugiat adipisci
        dolore nobis, soluta minus qui, exercitationem corrupti mollitia ipsa,
        magni repudiandae. Dolorem, sed hic! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Velit nam incidunt, voluptatem placeat
        distinctio ad alias corporis voluptatum tempora possimus vero at,
        minima, eos dolores molestias illum saepe nobis eligendi? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Ducimus ratione accusamus
        molestias totam porro fugiat adipisci dolore nobis, soluta minus qui,
        exercitationem corrupti mollitia ipsa, magni repudiandae. Dolorem, sed
        hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
        incidunt, voluptatem placeat distinctio ad alias corporis voluptatum
        tempora possimus vero at, minima, eos dolores molestias illum saepe
        nobis eligendi? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus ratione accusamus molestias totam porro fugiat adipisci
        dolore nobis, soluta minus qui, exercitationem corrupti mollitia ipsa,
        magni repudiandae. Dolorem, sed hic! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Velit nam incidunt, voluptatem placeat
        distinctio ad alias corporis voluptatum tempora possimus vero at,
        minima, eos dolores molestias illum saepe nobis eligendi? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Ducimus ratione accusamus
        molestias totam porro fugiat adipisci dolore nobis, soluta minus qui,
        exercitationem corrupti mollitia ipsa, magni repudiandae. Dolorem, sed
        hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
        incidunt, voluptatem placeat distinctio ad alias corporis voluptatum
        tempora possimus vero at, minima, eos dolores molestias illum saepe
        nobis eligendi? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus ratione accusamus molestias totam porro fugiat adipisci
        dolore nobis, soluta minus qui, exercitationem corrupti mollitia ipsa,
        magni repudiandae. Dolorem, sed hic! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Velit nam incidunt, voluptatem placeat
        distinctio ad alias corporis voluptatum tempora possimus vero at,
        minima, eos dolores molestias illum saepe nobis eligendi? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Ducimus ratione accusamus
        molestias totam porro fugiat adipisci dolore nobis, soluta minus qui,
        exercitationem corrupti mollitia ipsa, magni repudiandae. Dolorem, sed
        hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
        incidunt, voluptatem placeat distinctio ad alias corporis voluptatum
        tempora possimus vero at, minima, eos dolores molestias illum saepe
        nobis eligendi? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus ratione accusamus molestias totam porro fugiat adipisci
        dolore nobis, soluta minus qui, exercitationem corrupti mollitia ipsa,
        magni repudiandae. Dolorem, sed hic! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Velit nam incidunt, voluptatem placeat
        distinctio ad alias corporis voluptatum tempora possimus vero at,
        minima, eos dolores molestias illum saepe nobis eligendi? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Ducimus ratione accusamus
        molestias totam porro fugiat adipisci dolore nobis, soluta minus qui,
        exercitationem corrupti mollitia ipsa, magni repudiandae. Dolorem, sed
        hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
        incidunt, voluptatem placeat distinctio ad alias corporis voluptatum
        tempora possimus vero at, minima, eos dolores molestias illum saepe
        nobis eligendi? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus ratione accusamus molestias totam porro fugiat adipisci
        dolore nobis, soluta minus qui, exercitationem corrupti mollitia ipsa,
        magni repudiandae. Dolorem, sed hic! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Velit nam incidunt, voluptatem placeat
        distinctio ad alias corporis voluptatum tempora possimus vero at,
        minima, eos dolores molestias illum saepe nobis eligendi? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Ducimus ratione accusamus
        molestias totam porro fugiat adipisci dolore nobis, soluta minus qui,
        exercitationem corrupti mollitia ipsa, magni repudiandae. Dolorem, sed
        hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
        incidunt, voluptatem placeat distinctio ad alias corporis voluptatum
        tempora possimus vero at, minima, eos dolores molestias illum saepe
        nobis eligendi? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus ratione accusamus molestias totam porro fugiat adipisci
        dolore nobis, soluta minus qui, exercitationem corrupti mollitia ipsa,
        magni repudiandae. Dolorem, sed hic! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Velit nam incidunt, voluptatem placeat
        distinctio ad alias corporis voluptatum tempora possimus vero at,
        minima, eos dolores molestias illum saepe nobis eligendi? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Ducimus ratione accusamus
        molestias totam porro fugiat adipisci dolore nobis, soluta minus qui,
        exercitationem corrupti mollitia ipsa, magni repudiandae. Dolorem, sed
        hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
        incidunt, voluptatem placeat distinctio ad alias corporis voluptatum
        tempora possimus vero at, minima, eos dolores molestias illum saepe
        nobis eligendi? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus ratione accusamus molestias totam porro fugiat adipisci
        dolore nobis, soluta minus qui, exercitationem corrupti mollitia ipsa,
        magni repudiandae. Dolorem, sed hic! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Velit nam incidunt, voluptatem placeat
        distinctio ad alias corporis voluptatum tempora possimus vero at,
        minima, eos dolores molestias illum saepe nobis eligendi? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Ducimus ratione accusamus
        molestias totam porro fugiat adipisci dolore nobis, soluta minus qui,
        exercitationem corrupti mollitia ipsa, magni repudiandae. Dolorem, sed
        hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
        incidunt, voluptatem placeat distinctio ad alias corporis voluptatum
        tempora possimus vero at, minima, eos dolores molestias illum saepe
        nobis eligendi? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus ratione accusamus molestias totam porro fugiat adipisci
        dolore nobis, soluta minus qui, exercitationem corrupti mollitia ipsa,
        magni repudiandae. Dolorem, sed hic!
      </div>
    </div>
  );
}

export default App;

// const App = () => {
//   return <></>;
// };

// export default App;

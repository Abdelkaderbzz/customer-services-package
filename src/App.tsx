
import { TakiPopups } from './package/TakiPopups';


function App() {
  const name = 'adem';
  const memberId = '546363546';
  const meta_data = {
    age: 18,
    state: 'manouba',
    city: 'manouba',
  };

  return (
    <div className='App'>
      hello world
      <TakiPopups name={name} memberId={memberId} meta_data={meta_data} />
    </div>
  );
}

export default App;

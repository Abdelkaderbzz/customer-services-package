import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
    <Router>
      <div>
        <h2>indexed db dexie.js workshop</h2>
        <div className='card'></div>
        <p className='read-the-docs'>hello</p>
        <TakiPopups name={name} memberId={memberId} meta_data={meta_data} />
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const Profile = () => <h2>Profile Page</h2>;
export default App;

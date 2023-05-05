import logo from './logo.svg';
import './App.css';
import Check from './Check';
import Login from './component/Login';
import Home from './component/Home';
import Profile from './component/Profile';
import Protected from './component/Protected';
import { Link, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import { useEffect } from 'react';

function App() {

  let logedOut = () => {
    localStorage.removeItem("login");
    <Navigate to="/login" />
  }



  return (
    <div className="App">


      <ul className="nav">
        <li>
          <button className="butt"><Link to={'/'}>Home</Link></button>
        </li>
        <li>
          <button className="butt"><Link to={'/login'}>Login</Link></button>
        </li>
        <li>
          <button className="butt"><Link to={'/Profile'}>Profile</Link></button>
        </li>
        <li>
          <button className="butt" onClick={logedOut}>Log Out</button>
        </li>
      </ul>

      
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/login" element={<Protected Component={Login} />} />
        <Route path="/Profile" element={<Protected Component={Profile } />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>



    </div>
  );
}

export default App;

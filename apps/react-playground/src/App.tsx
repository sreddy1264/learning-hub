import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Login } from './features/login/Login';
import { Home } from './features/home/Home';
import { About } from './features/about/About';
// import { sum } from '@siri/utility-lib';
// import { CounterConnected } from "./features/counter/Counter";

export function App() {
  const [submit, setSubmit] = useState(false);
  return (
    <>
      {!submit ? <Login setSubmit={setSubmit} /> : 
      <>
     <nav>
        <Link to="/home">Home</Link>
        <Link to="/About">About</Link>
      </nav>
      <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/About" element={<About />} />
      </Routes>
      </>}
      {/* <CounterConnected /> */}
    </>
  );
};

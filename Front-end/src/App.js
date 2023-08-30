
import React , { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './_custom.scss';
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from './components/Navbar.jsx';
import MenuandPricing from "./components/MenuandPricing";
import Registration from './components/Registration';
import Authentication from './components/Authentification.jsx';

function App() {
  const [view, setView] = useState('home');

  const changemenu = () => {
    setView('menuandpricing');
  }
  
  const changehome = () => {
    setView('home');
  }

  const login = () => {
    setView('');
  }

  const regist = () => {
    setView('registration');
    console.log(view);
  }
  
  const auth = () => {
    setView('authentication');
  }

  return (
    <div>
      {view === 'authentication' ? (
        <Authentication 
          change={changehome}
          current={login}
          regist={regist}
        />
      ) : view === 'registration' ? (
        <Registration auth={auth} />
      ) : (
        <div className="App">
          <Navbar changemenu={changemenu} changehome={changehome} />
          {view === 'home' && <Home />}
          {view === 'menuandpricing' && <MenuandPricing />}
        </div>
      )}


  );
}

export default App;

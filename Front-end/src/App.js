
import React , { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './_custom.scss';
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from './components/navbar.jsx';
import MenuandPricing from "./components/MenuandPricing";
import Registration from './components/Registration';
import Authentication from './components/Authentification.jsx';

import ContactUs from './components/ContactUs';
import MasterChefs from './components/MasterChefs';
function App() {
  const [view, setView] = useState('home');




  const changemenu = () => {
    setView('menuandpricing');
  }
  
  const changehome = () => {
    setView('home');
  }


  const changemasterchefs = () => {
    setView('masterchefs');
  }

  const changecontact = () => {
    setView('contact');
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

          <Navbar changemenu={changemenu} changehome={changehome} changecontact={changecontact} changemasterchefs={changemasterchefs} />
          {view === 'home' && <Home />}
          {view === 'menuandpricing' && <MenuandPricing />}
          {view === 'contact' && <ContactUs/>}
          {view === 'masterchefs' && <MasterChefs/>}

          </div>

      )}
      <Footer />

          
        </div>
  );
}

export default App;


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
import ContactUs from './components/ContactUs';
import MasterChefs from './components/MasterChefs';
import Search from './components/Search.jsx';
function App() {
  const [view, setView] = useState('authentication');
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState([]);
  const changesearch=()=>{
    setView("search")
   }
  const currentuser =(newuser)=>{
    setUser(newuser)
  }
 console.log(user);
  const Searches = (search)=>{
setSearchResults(search)
console.log("im in app ", searchResults);
  }
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
          changehome={changehome}
          currentuser={currentuser}
          regist={regist}
        />
      ) : view === 'registration' ? (
        <Registration auth={auth} />
      ) : (
        <div className="App">

          <Navbar changemenu={changemenu} changehome={changehome} changecontact={changecontact} changemasterchefs={changemasterchefs} Searches={Searches} changesearch={changesearch}
          />
          {view === 'home' && <Home user={user}/>}
          {view === 'menuandpricing' && <MenuandPricing />}
          {view === 'contact' && <ContactUs/>}
          {view === 'masterchefs' && <MasterChefs/>}
          {view ==="search" && <Search searchResults={searchResults}/>}

          <Footer />
          </div>

      )}
      


        </div>
  );
}

export default App;

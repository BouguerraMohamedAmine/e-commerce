
import React , { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './_custom.scss';
import Home from "./components/Home.jsx";
import Search from "./components/Search.jsx"
import Footer from "./components/Footer.jsx";
import Navbar from './components/Navbar.jsx';
import MenuandPricing from "./components/MenuandPricing";
import Registration from './components/Registration';
import Authentication from './components/Authentification.jsx';

function App() {
  const [view, setView] = useState('authentication');
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState([]);
  
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

 const changesearch=()=>{
  setView("search")
 }

  const regist = () => {
    setView('registration');

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
          <Navbar changemenu={changemenu} changehome={changehome} Searches={Searches} changesearch={changesearch}/>
          {view === 'home' && <Home user={user}/>}
          {view === 'menuandpricing' && <MenuandPricing />}
          {view ==="search" && <Search searchResults={searchResults}/>}
      <Footer/>
        </div>
      )}

        </div>
  );
}

export default App;


import React , { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './_custom.scss';
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from './components/Navbar.jsx';
import MenuandPricing from "./components/MenuandPricing.jsx";
import Registration from './components/Registration.jsx';
import Authentication from './components/Authentification.jsx';
import ContactUs from './components/ContactUs.jsx';
import MasterChefs from './components/MasterChefs.jsx';
import Search from './components/Search.jsx';
import forums from './components/Forum.jsx';
// import Recipes from './components/Recipes.jsx';
import Rc from  "./components/Rc.jsx"
import Forum from './components/Forum.jsx';

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
  const changeRc = () => {
    setView('rc');
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

 const changeRecipes = () =>{
  setView('Recipes')
 }

 const changeforums = () =>{
  setView ('forums')
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

          <Navbar changeRc={changeRc} changemenu={changemenu} changehome={changehome} changecontact={changecontact} changemasterchefs={changemasterchefs} Searches={Searches} changesearch={changesearch} changeforums={changeforums} changeRecipes={changeRecipes}
          />
          {view === 'home'           && <Home user={user}/>}
          {view === 'menuandpricing' && <MenuandPricing />}
          {view === 'contact'        && <ContactUs/>}
          {view === 'masterchefs'    && <MasterChefs/>}
          {view === 'search'         && <Search searchResults={searchResults}/>}
        
          {view === 'forums'      && <Forum />}
          {
            view==="rc"&& <Rc/>
        } 

          <Footer />
          </div>

      )}
      


        </div>
  );
}

export default App;

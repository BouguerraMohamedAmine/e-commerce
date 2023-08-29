import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './_custom.scss';
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import MenuandPricing from "./components/MenuandPricing";

function App() {
  const [view, setView]=useState('home')

  const changemenu=()=>{
    setView('menuandpricing')
  }
  
  const changehome=()=>{
    setView('home')
  } 
  return (
    <div className="App">
<Navbar changemenu={changemenu} changehome={changehome} />

   {view==='home' && <Home />}
   {view==='menuandpricing' && <MenuandPricing />}
    </div>
  );
}

export default App;

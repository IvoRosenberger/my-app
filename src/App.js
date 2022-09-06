import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ItemListContainer from './components/ItemListContainer.js';
import Contador from './components/ItemCount';


export default function App() {
  return (
    <>
      <NavBar />
      <Hero title="El Rey de la Birra" />
      <ItemListContainer/>
      <Contador/>
    </>
  );
}
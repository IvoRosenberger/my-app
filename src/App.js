import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ItemListContainer from './components/ItemListContainer.js';
import Contador from './components/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='category/:id' element={<ItemListContainer/>} />
      </Routes>
      <Hero title="El Rey de la Birra" />
      <ItemListContainer />
      <Contador />
    </BrowserRouter>
  );
}
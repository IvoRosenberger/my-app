import React, { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ItemListContainer from './components/ItemListContainer.js';
import Contador from './components/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContext from './contexts/cartContext.js';

export default function App() {
  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);
  return (
    <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='category/:id' element={<ItemListContainer />} />
        </Routes>
        <Hero title="La casa de la lepra" />
        <ItemListContainer />
        <Contador />
      </BrowserRouter>
    </CartContext.Provider>
  );
}
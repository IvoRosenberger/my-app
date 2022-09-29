import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../views/Home'
import Producto from '../views/Producto'
import Catalogo from '../views/Catalogo'
import CarritoProvider from '../context/CarritoProvider'
import Carrito from '../views/Carrito'

function Rutas({data,tickets}) {
    return (
        <BrowserRouter>
            <CarritoProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Home data={data}/>}/>
                        {/* <Route path="/cart" /> */}
                        <Route path="/producto:id" />
                        <Route path="/category/:id"element={<Catalogo data={data}/>}/>
                        <Route path="/item/:id" element={<Producto/>}/>
                        <Route path="/cart" element={<Carrito/>} />
                    </Route>
                </Routes>
            </CarritoProvider>
        </BrowserRouter>
    )
}

export default Rutas
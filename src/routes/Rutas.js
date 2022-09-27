import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import CarritoProvider from '../context/carritoProvider'


function Rutas({data,tickets}) {
    return (
        <BrowserRouter>
            <CarritoProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        {/* <Route path="/cart" /> */}
                        <Route path="/producto:id" />
                    </Route>
                </Routes>
            </CarritoProvider>
        </BrowserRouter>
    )
}

export default Rutas
import React from 'react'
import {CarritoConsumer} from '../context/CarritoProvider';
import CompraVacia from './compraVacia'
import CompraNormal from './compraNormal';



function Cart() {
    const {carrito}=CarritoConsumer()

    return (
        <section className='pantallaCarrito'>
            {carrito.length===0?
            <CompraVacia/>:
            <CompraNormal/>}
        </section>
        
    )
    }

export default Cart

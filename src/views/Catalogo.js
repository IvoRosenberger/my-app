import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import { useParams } from 'react-router-dom'


function Catalogo({data}) {
    let mostrando=[];
    let elFiltro=useParams().id;

    let filtrar=()=>(data? data.map((camiseta)=>(
        elFiltro===camiseta.deporte || elFiltro===camiseta.indumentaria?
        mostrando.push(camiseta):null))
        :null)
        filtrar();
    console.log(mostrando)
    return (
        <section className='mainCatalogo'>
            <section className='bannerContenedor'>
            <h2>{elFiltro}</h2>
            </section>
        <section className='viewCatalogo'>
            

            <ItemListContainer data={mostrando} />
        </section>
        </section>
    )
}

export default Catalogo

import ItemCount from './ItemCount'
import { useState } from 'react';


function ItemDetail({ item }) {
    const [compraTerminada, setCompraTerminada] = useState(false)
    return (
        <div className="itemDetalles">
            <section className="detallesGenerales">
                <section className="titulo">
                    <h2>{item.equipo}</h2>
                    <h3>{item.tipo}</h3>
                    <p>Item: {item.id}</p>
                </section>
                <section className="sectionPrecio">
                    <h6 className="precio">$<span>{item.precio}</span></h6>
                    <h6 className="detallePrecio">Incluye envio dentro del área</h6>
                </section>
                <section className="detallesMenores">
                    <p><span>Marca:</span> {item.marca}</p>
                    <p><span>Tipo:</span> {item.indumentaria}</p>
                    <p><span>Deporte:</span> {item.deporte}</p>
                    <p><span>Torneo:</span> {item.torneo}</p>
                    <p><span>Stock:</span> {item.stock}</p>
                    <p className="descripcion">{item.descripcion}</p>
                </section>
                <ItemCount stock={item.stock} item={item} clase={!compraTerminada ? "detalle" : "invisible"} setCompraTerminada={setCompraTerminada} initial="1" />
            </section>
        </div>
    )
}

export default ItemDetail

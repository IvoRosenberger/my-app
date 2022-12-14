import React, { useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import useFirebase from '../hooks/UseFirebase';


function ItemDetailContainer() {
    const identi=useParams().id
    const {producto, fetchGetIndividualProduct}= useFirebase()
        useEffect(()=>{
            fetchGetIndividualProduct(identi)
            //eslint-disable-next-line
        },[])
    return (
        <div className="itemDetailContainer">
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer

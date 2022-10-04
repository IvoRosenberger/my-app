import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFirebase from '../hooks/UseFirebase';
import Ticket from './Ticket';
import Spinner from '../UI/Spinner';

function TicketContainer() {
    
    const identi=useParams().id
    const {producto, fetchGetIndividualTicket}= useFirebase()
        useEffect(()=>{
            fetchGetIndividualTicket(identi)
            //eslint-disable-next-line
        },[])
    return (
        <div>
            {producto?<Ticket ticket={producto}/>:<Spinner/>}
            
        </div>
    )
}

export default TicketContainer

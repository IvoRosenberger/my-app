
import Rutas from './routes/Rutas';
import React, { useEffect} from 'react'
import useFirebase from './hooks/UseFirebase';
function App() {
    const {productos, fetchGetDataCollection}= useFirebase()
    useEffect(()=>{
        fetchGetDataCollection()
        //eslint-disable-next-line
    },[]) 

    

    return (
        <div className={`App`}>
            <Rutas data={productos}/>
        </div>
    );
}

export default App;


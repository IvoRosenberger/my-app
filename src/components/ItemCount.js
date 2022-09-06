import { useState } from 'react'

function Contador() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>El contador es: {count}</p>

      <div>
        <button onClick={() => setCount(count+1)}>Agregar</button>
        <button onClick={() => setCount(count-1)}>Eliminar</button>
        <button onClick={() => setCount(0)}>Reset count</button>
      </div>
    </div>
  )
}

export default Contador;
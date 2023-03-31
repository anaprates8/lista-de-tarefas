import { useState } from 'react'
import './App.css'
import CardAdicionar from './Components/CardAdicionar'


function App() {
  const [textoTarefa, setTextoTarefa] = useState([]);
  

  let novaTarefa = {
    id: 0,
    texto: textoTarefa,
    finalizado: false,
  }

  return (
    <div>
      <CardAdicionar adicionarTarefa={novaTarefa}></CardAdicionar>
    </div>
  );
}

export default App;



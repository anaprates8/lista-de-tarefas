import { useState } from 'react'
import './App.css'
import CardAdicionar from './Components/CardAdicionar'
//import ListItem from './Components/ListItem';



function App() {
  const [Tarefa, setTarefa] = useState([]);
  
  
  const criarTarefas = (tarefa) => {
    const novaTarefa = {
      id: listaDeTarefas.length + 1,
      texto: 'tarefa',
      finalizado: false,
    };

    setTarefa([...listaDeTarefas, novaTarefa]);
  }


  return (
    <div>
      <CardAdicionar  />
   
    </div>
  );
}


export default App;




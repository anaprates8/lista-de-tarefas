import { useState } from 'react';


const CardAdicionar = ({ adicionarTarefa }) => {
  const [tarefa, setTarefa] = useState('');
   
  function handleSalvar(event){
  event.preventDefault();
  }

  return (
   
    <container>
      <header>
        <h1>To Do List</h1>
      </header>
      <cadastro>
    <form onSubmit= {handleSalvar}>
      <input type="text" placeholder= "Descreva sua tarefa" onChange={(evento) => setTarefa(evento.target.value)} />
      <button type= 'submit'>Incluir</button>
    </form>
    </cadastro>
    </container>
  );
}


export default CardAdicionar;
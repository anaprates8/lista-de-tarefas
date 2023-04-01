import React, { useState } from "react";

function ListItem({ tarefa, tarefaFeita, removerTarefa }) {
  const [finalizado, setFinalizado] = useState(tarefa.finalizado);


  function handleFinalizarTarefa() {
    setFinalizado(!finalizado);
    tarefaFeita(tarefa.id);
  }

  function finalizarTarefa() {
    setFinalizado(true);
  }

  return (
    <div>
      <p>{props.tarefa.texto}</p>
      {finalizado ? (
        <p>Tarefa finalizada!</p>
      ) : (
        <button type= "submit"{...finalizarTarefa}>Finalizar Tarefa</button>
      )}
    </div>
  );
}

export default ListItem;

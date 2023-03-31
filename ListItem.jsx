import React, { useState } from "react";

const ListItem = ({ tarefa, tarefaFeita, removerTarefa }) => {
    const [finalizado, setFinalizado] = useState(tarefa.finalizado);


  function finalizarTarefa() {
    setFinalizado(true);
    props.onFinalizar(props.tarefa.id);
  }

  return (
    <div>
      <p>{props.tarefa.descricao}</p>
      <p>{finalizado ? "Concluída" : "Pendente"}</p>
      {!finalizado && (
        <button onClick={finalizarTarefa}>Concluir tarefa</button>
      )}
    </div>
  );
}

export default ListItem;

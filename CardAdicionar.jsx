import { useState } from 'react';

function CardAdicionar( ) {
  const [textoTarefa, setTextoTarefa] = useState('');

  function handleChangeTexto(evento) {
    setTextoTarefa(evento.target.value);
  }

  function handleCardAdicionar () {
    CardAdicionar(textoTarefa);
    setTextoTarefa('');
  }

  return (
    <div className='input'>
      <input type="text" value={textoTarefa} onChange={handleChangeTexto} />
      <button onClick={handleCardAdicionar}>Adicionar Tarefa</button>
    </div>
  );
}

export default CardAdicionar;
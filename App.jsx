import { useState } from 'react'
import './App.css'
import CardAdicionar from './Components/CardAdicionar'


function App() {
  const [arrayDeObjetos, setArrayDeObjetos] = useState([]);

  return (
    <div>
      <CardAdicionar />
    </div>
  );
}

export default App;



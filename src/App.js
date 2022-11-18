
import './App.css';
import React,{useState} from 'react';
import Input from './components/Input/Input';
import Boton from './components/Boton/Boton';

function App() {

  const [usuario,setUsuario] = useState('');
  const [password,setPassword] = useState('');
  return (
    <div className="App">
      <Input usuario={usuario}
            setUsuario={setUsuario}
            password={password}
            setPassword={setPassword}/>
      
      {password === '252525'? <Boton />: null}       
     
    </div>
  );
}

export default App;

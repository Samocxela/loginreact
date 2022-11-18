import { useState } from 'react';
import './login.css'

export default function Login(){
    const [usuario,setUsuario] = useState(null);
    const [password,setPassword] = useState(null);
    const usuarioHandler = (e)=>{
        setUsuario(e.target.value);
        
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
    }
    return(
        <div >
             
            <form action="">
                    <label>Nombre: </label>
                    <input className='input input-bordered input-xs w-full max-w-xs ' type='text' placeholder='ingresa usuario' onChange={usuarioHandler} required/>
                    <br/>
                    <label>Password: </label>
                    <input className='input input-bordered input-xs w-full max-w-xs gap-4'  type='Password' placeholder='ingresa password' onChange={passwordHandler}/>
                    
            </form>
           {(password === '252525')? <button className='btn btn-dark btn-xs'>Ingresar</button>: <h1>Ingrese nombre de usuario y contraseña</h1>}
                
           
               
        </div>
    )
    
}
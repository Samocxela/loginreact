import "./input.css"
export default function Input ({usuario, setUsuario, password, setPassword}){
    return(
        <div>
            <form action="">
                <label htmlFor="nombre">Nombre :</label>
                <input className="input input-bordered input-xs w-full max-w-xs " 
                        name="nombre" id="nombre" type='text' placeholder='Ingresar nombre' 
                        onChange={(e)=> setUsuario(e.target.value)} value={usuario}></input>
                <label htmlFor="password"> Password :</label>
                <input className="input input-bordered input-xs w-full max-w-xs " 
                        name="password" id="password" type='password' placeholder='Ingresar Password' 
                        onChange={(e)=> setPassword(e.target.value)} value={password} autoComplete=''></input>
            </form>
        </div>
    )

}
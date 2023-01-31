import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cabecalho2 from "../components/Cabecalho2";
function Login(){
    return(
        <>
        <Cabecalho2/>
            <main>
            <div id="buscarlogin">

                 <form onSubmit={Login}>
                 <label>
                     <p>Login</p>
                 <input type="text" placeholder="  login" className="cidade"/>
                 </label>

                 <label>
                     <p>Senha</p>
                 <input type="text" placeholder="  *********" className="cidade"/>
                 </label>
                 <button type="submit" className="submitformbutton">Entrar</button>
                </form>
            </div>
             
         </main>
         </>
    )
}
export default Login
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from '../imagens/logo2.png'
import Imglogin from '../imagens/login.png'
import lupa from '../imagens/lupa.png'
import Coleta from '../imagens/imgcoleta.jpg'
import styles from './styles.css'
import imgfundo from '../imagens/imgfundo.png'
import RecicleRN from '../imagens/RecycleRN.png'
import Cabecalho from "../components/Cabecalho";
function Login(){
    return(
        <>
        <Cabecalho/>
            <main>
            <div id="buscarlogin">
                 <h1>Login</h1>
                 <form onSubmit={Login}>
                 <label>
                     <p>Qual o seu login?</p>
                 <input type="text" placeholder="email" className="cidade"/>
                 </label>

                 <label>
                     <p>Digite a sua senha.</p>
                 <input type="text" placeholder="*********" className="cidade"/>
                 </label>
                 <button type="submit" className="submitformbutton">Entrar</button>
                </form>
            </div>
             
         </main>
         </>
    )
}
export default Login
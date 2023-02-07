import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from '../imagens/logo2.png'
import Imglogin from '../imagens/login.png'
import RecicleRN from '../imagens/RecycleRN.png'
import '../css/cabecalho.css'

function Cabecalho(){
    return(
        <>
        <header>
               <img src={Logo} alt="Logo" className="logosite" />
                <img src={RecicleRN} alt="Logo" className="RecyclaRN" />
                <img src={Imglogin} alt="Imagem de login" className="loginsite" />
                <div className="login" >
                    <Link to="/Login" id="botaologin" >Login</Link>
                    <Link to="/Cadastro" className="cadastro">Cadastre-se</Link>
                </div>
            </header>
            <nav>

                <Link to="/">Inicio</Link>
                <Link to="/Pontos de coleta">Pontos de coleta</Link>
                <Link to="/Coleta Seletiva">Coleta seletiva</Link>
             </nav></>
    )
}
export default Cabecalho
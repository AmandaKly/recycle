import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from '../imagens/logo2.png'
import Imglogin from '../imagens/login.png'
import lupa from '../imagens/lupa.png'
import Coleta from '../imagens/imgcoleta.jpg'


import imgfundo from '../imagens/imgfundo.png'
import RecicleRN from '../imagens/RecycleRN.png'

function Cabecalho2(){
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
            </>
    )
    
}
export default Cabecalho2
import { Link } from "react-router-dom";
import Logo from '../imagens/logo2.png'
import Imglogin from '../imagens/login.png'
import RecicleRN from '../imagens/RecycleRN.png'

function Cabecalho4(){
    return(
        <>
        <header>
               <img src={Logo} alt="Logo" className="logosite" />
                <img src={RecicleRN} alt="Logo" className="RecyclaRN" />
                <img src={Imglogin} alt="Imagem de login" className="loginsite" />
                <div className="login" >
                    <Link to="/" id="botaologin" >Logout</Link>
                    <Link to="/Ponto do usuario" className="cadastro">usuario</Link>
                </div>
            </header>
           </>
    )
}
export default Cabecalho4
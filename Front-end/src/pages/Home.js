import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from '../imagens/logo2.png'
import Imglogin from '../imagens/login.png'
import lupa from '../imagens/lupa.png'
import Coleta from '../imagens/imgcoleta.jpg'
import styles from './styles.css'
import imgfundo from '../imagens/imgfundo.png'
import RecicleRN from '../imagens/RecycleRN.png'
import Cabecalho from "../components/Cabecalho";
function Home() {
    return (
        <div>
            <Cabecalho/>
            <main >
                <div id="divBusca">
                    <h1>Pesquisar</h1>
                    <div>
                    <label className="cep">
                        <p> Qual Cep ou a cidade que deseja pesquisar?</p>
                    <input type="text" placeholder="Cep/Cidade" className="cidade"/>
                    </label>
                    </div>

                    <h2>Qual o tipo de material?</h2>
                    <div className="dividir">
                    <label>
                        <input type="radio" name="plastico" />
                         <p>Plástico</p> 
                    </label>
                    <label>
                        <input type="radio" name="vidro" />
                         <p>Vidro</p> 
                    </label>
                    <label>
                        <input type="radio" name="papel" />
                         <p>Papel</p> 
                    </label>
                    <label>
                        <input type="radio" name="eletronico" />
                         <p>Eletronico</p> 
                    </label>
                    <label>
                        <input type="radio" name="outro" />
                         <p>Outro</p> 
                    </label>
                    </div>
                    <h2>Marque a empresa deseja saber o ponto </h2>
                    <div className="dividir2">
                    <input type="radio" name="ponto" />
                    <label>Coleta em ponto fisico</label>
                    </div>
                    <div className="dividir2">
                    <input type="radio" name="ponto" />
                    <label>Coleta Seletiva</label>
                    
                    </div>
                    <button type="submit" id="buscar">Buscar</button>


                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}
export default Home
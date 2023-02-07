import Cabecalho from "../components/Cabecalho";
import '../css/ColetaSeletiva.css'
import {  Link } from "react-router-dom";

function Coletausuario() {
    return (
        <>
            <Cabecalho />
            <main>
                <div id="paginacoleta">
                    <div id="pontos">
                        <h1 className='header'>Coleta Seletiva</h1>
                    </div>
                    <div id="coletaseletiva">

                        <div id="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Dias</th>
                                        <th>Bairros</th>
                                        <th>Horario</th>
                                    </tr>
                                    <tr>
                                        <td>Segunda</td>
                                        <td className="bairros">Manoel Salustino</td>
                                        <td>10:00</td>
                                    </tr>
                                    <tr>
                                        <td>Terça</td>
                                        <td className="bairros">Silvio Bezerra e Parque das Pedras</td>
                                        <td>10:00</td>
                                    </tr>
                                    <tr>
                                        <td>Quarta</td>
                                        <td className="bairros">Centro e Santa Maria Gorete</td>
                                        <td>10:00</td>
                                    </tr>
                                    <tr>
                                        <td>Quinta</td>
                                        <td className="bairros">Gilberto Pinheiro e Antônio Rafael</td>
                                        <td>11:00</td>
                                    </tr>
                                    <tr>
                                        <td>Sexta</td>
                                        <td className="bairros">Centro Comercial</td>
                                        <td>11:30</td>
                                    </tr>

                                </thead>
                            </table>
                        </div>
                        <div classname='informacoes'>
                            <div className="detalhes">
                                <div className="contato">
                                <h2>Contato:</h2>
                                    <div className="borda">
                                    <p><strong >Telefone:</strong>(xx)22222-2222</p>
                                    <p><strong>Email:</strong>_abcd@_gamil.com</p>
                                    </div>
                                </div>
                                <div  className="observacoescoleta">
                                    <h2>Observarções:</h2>
                                        <div className="borda2">
                                        <p>MATERIAL SECO RECICLAVEL:Garrafa Pet, Sacola, Recipiente plástico (Alimentício, Higiene e Limpeza), plástico filme, Bacia, Brinquedo, Livro, Caderno, Papelão, Lata de bebida, e de Alimentos, Ferro, Cobre e Bronze.</p>
                                        </div>
                                    
                                </div>
                                
                            </div>
                            <Link to="/cadastrocoleta"><button type="submit" id="cadastrarponto" > Cadastrar novas rotas</button></Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Coletausuario;
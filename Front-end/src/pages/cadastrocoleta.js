import Cabecalho from "../components/Cabecalho"
import '../css/cadastrocoleta.css'

function Cadastrocoleta() {
    return (
        <>
            <Cabecalho />
            <main>
                <div id="paginacoleta">
                    <div id="pontos">
                        <h1 className='header'>Cadastrar rotas</h1>
                    </div>
                    <div id="coletaseletiva">

                        <div id="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Dia</th>
                                        <th>Bairro</th>
                                        <th>Horario</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" /></td>
                                        <td className="bairros"><input type="text" /></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" /></td>
                                        <td className="bairros"><input type="text" /></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" /></td>
                                        <td className="bairros"><input type="text" /></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" /></td>
                                        <td className="bairros"><input type="text" /></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" /></td>
                                        <td className="bairros"><input type="text" /></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div classname='informacoes'>
                            <div className="detalhes">
                                
                                <div  className="observacoescoleta">
                                    <h2>Observarções:</h2>
                                        <div >
                                            <textarea cols="30" rows="10" placeholder="MATERIAL SECO RECICLAVEL:Garrafa Pet, Sacola, Recipiente plástico (Alimentício, Higiene e Limpeza), plástico filme, Bacia, Brinquedo, Livro, Caderno, Papelão, Lata de bebida, e de Alimentos, Ferro, Cobre e Bronze."></textarea>
                                        
                                        </div>
                                        
                                </div>
                                <button type="submit" id="cadastrar" > Cadastrar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Cadastrocoleta;
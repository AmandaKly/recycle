
import { useState } from "react";
import Cabecalho3 from "../components/Cabecalho3";
import {  Link } from "react-router-dom";



function PontosDoUsuario() {
    
    return (
        <>
            <Cabecalho3 />
            
            <main>
            <div id="pontos">
                        <h1 className='header'>Pontos de coleta</h1>
                        </div>
                <div id="pontosColeta">
                    
                        <div id="buscarpontos">
                            <div className="descrição">
                                <h2>Nome da empresa:</h2>
                                <p>farmacia pague menos</p>
                                <h2>Endereço:</h2>
                                <p>Rua:<br />Bairro:<br />Currais novos/RN </p>
                                <h2>Tipo de material que recebe:</h2>
                                <select>
                                    <option value="" key="">Vidro</option>
                                    <option value="" key="">Plastico</option>
                                </select>
                            </div>
                            <div className="Observacao">
                                <h2>Observações:</h2>
                                <p>descrições do produto</p>
                            </div>

                        </div>
                        </div>
                    <Link to="/cadastrarpontos"><button type="submit" id="cadastrarponto" > Cadastrar novo ponto </button></Link>
                

            </main>
        </>
    )
}
export default PontosDoUsuario
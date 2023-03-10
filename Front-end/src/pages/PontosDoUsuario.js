import Cabecalho3 from "../components/Cabecalho3";
import {  Link } from "react-router-dom";
import api from "../services/api";
import { Component } from "react";
import '../css/pontos.css'




class PontosDousuario extends Component {

    state={
        cep:[],
    }
    
 
    async componentDidMount(){
        const response = await api.get('/pontos')
        this.setState({cep:response.data})
        
    }
    
    render(){
        const {cep}= this.state;

    return (
        <>
            <Cabecalho3 />
            
            <main>
                
            <div id="pontos">
                        <h1 className="header">Pontos de coleta</h1>
                        </div>
                <div id="pontosColeta">
                
                {cep.map(cep=>(
                    
                                
                        <div id="buscarpontos"key={cep.id}>
                            
                            <div className="descrição" >
                                <h2>Nome da empresa:</h2><p >{cep.nome }</p><h2>Endereço:</h2><p >{cep.endereco_ponto} </p>
                                <h2>Tipo de material que recebe:</h2>
                                <select>
                                    <option value="" >{cep.material}</option>
                                    <option value="" >Plastico</option>
                                </select>
                        </div>
                        <div className="Observacao">
                            <h2>Observações:</h2>
                            <p>{cep.descricao}</p>
                        </div>

                    

                        </div>
                        ))}</div>
                
                <Link to="/cadastrarpontos"><button type="submit" id="cadastrarponto" > Cadastrar novo ponto </button></Link>
            </main>
        </>
    )
}}
export default PontosDousuario

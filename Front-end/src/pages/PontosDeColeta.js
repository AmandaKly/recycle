import api from "../services/api";
import Cabecalho from "../components/Cabecalho";
import { Component } from "react";
import '../css/pontos.css'



class PontosDeColeta extends Component {

    state={
        cep:[],
    }
    
 
    async componentDidMount(){
        
        const response = await api.get('/pontos')
        this.setState({cep:response.data})
        
        
    }
    
    render(){
        const {cep} = this.state;

        
    return (
        <>
            <Cabecalho />
            
            <main>
                
            <div id="pontos">
                        <h1 className="header">Pontos de coleta</h1>
                        </div>
                <div id="pontosColeta">
                
                {cep.map(cep=>(
                    
                                
                        <div id="buscarpontos"key={cep.id}>
                            
                            <div className="descrição" >
                                <h2>Nome da empresa:</h2><p >{cep.nome }</p><h2>Endereço:</h2><p >{cep.endereco_ponto} </p>
                                
                        </div>
                        <div className="Observacao">
                            <h2>Observações:</h2>
                            <p>{cep.descricao}</p>
                        </div>

                    

                        </div>
                        ))}</div>
                

            </main>
        </>
    )
}}
export default PontosDeColeta
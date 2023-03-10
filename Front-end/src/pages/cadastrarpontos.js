import Cabecalho4 from "../components/Cabecalho4";
import React from 'react'
import imgemcadastropontos from '../imagens/imgcadastropontos.png'
import axios from "axios";
import InputMask from 'react-input-mask';
import '../css/cadastrarpontos.css'

function CadastrarPontos() {
    const [nome,setnome]=React.useState('')
    const [endereco_ponto,setendereco_ponto]=React.useState('')
    // const [material,setmaterial]=React.useState('')
    const [descricao,setdescricao]=React.useState('')
    const [cep,setcep]=React.useState('')
   

    
    const CadastrarPontos = (e) =>{
        e.preventDefault()
        const data = {
            nome:nome,
            endereco_ponto:endereco_ponto,
            // material:material,
            descricao:descricao,
            cep:cep
        }
        axios.post( 'http://127.0.0.1:3333/api/usuario/1/pontos',data)//rota que cadastra no server
         .then((response) =>{
             console.log('deu certo')
             alert('Cadastro realizado com sucesso')
             window.location='http://localhost:3000/Login'
            return Promise.resolve(response)
        })
        .catch((error)=> {
            alert('Seu cadastro não deu, certo tente novamente')
            console.log(data)
            return Promise.reject(error)
             
          })
        // console.log(data)
         
    }
    return (
        <>
            <Cabecalho4 />

            <main>
            <form onSubmit={CadastrarPontos}>
                <div id="cadastropontos"> <img src={imgemcadastropontos} alt="" />
                <div id="cadastrarpontos">
                    <div id="pontos">
                        <h1 className='header'>Cadastrar Pontos</h1>
                    </div>
                    <div className="formpontos">
                        
                        <div className="cadastrar">
                            <label>Nome da empresa:</label>
                            <input type="text" placeholder="recyclarn"  value={nome} onChange={(e) => setnome(e.target.value)}/>
                            <label>CEP:</label>
                            <InputMask 
                                mask="99999-999" type="text" placeholder="59360-000"  value={cep} onChange={(e) => setcep(e.target.value)}/>
                            <label>Endereço:</label>
                            <textarea cols="30" rows="5" placeholder="Rua: Maestro nem luiz 174        Bairro:Radir pereira    Currais novos/rn " value={endereco_ponto} onChange={(e) => setendereco_ponto(e.target.value)}></textarea>
                            {/* <label>Tipo de material que recebe:</label>
                            <input type="text" placeholder="Ex:vidro" value={material} onChange={(e) => setmaterial(e.target.value)} /> */}
                        </div>
                        <div className="cadastrarobs" >
                            <h2>Observações:</h2>
                            <textarea cols="30" rows="5" value={descricao} onChange={(e) => setdescricao(e.target.value)} ></textarea>
                        </div>
                        
                        
                        
                    </div>
                    <button type="submit" id="cadastrar" > Cadastrar </button>
                </div>
                </div>
                </form>
            </main>
        </>
    )
}
export default CadastrarPontos
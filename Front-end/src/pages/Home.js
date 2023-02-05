import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cabecalho2 from "../components/Cabecalho2";
import React from 'react'
import axios from "axios";
import img from '../imagens/imagemdohome.png'


function Home() {
    const [cep,setcep]=React.useState('')

    const Home = (e) =>{
        e.preventDefault()
        const data = {
            cep:cep
        }
        axios.post( 'http://127.0.0.1:3333/api/pontos/listar/cep',data)//rota que cadastra no server
         .then((response) =>{
             console.log('deu certo')
             alert(`Realmente quer pesquisar os pontos do cep ${cep} `)
             window.location="http://localhost:3000/Pontos de coleta"
            return Promise.resolve(response)
        })
        .catch((error)=> {
             return Promise.reject(error)
          })
        
         
    }



    return (
        <form onSubmit={Home}>
        
            <Cabecalho2/>
            <main>
            <div id="inicio">
                <div  >
                    <h3 id="apresentacao" >
                    Seja bem-vindo ao nosso site.
Aqui você encontra os Pontos de Coleta mais próximos, contribuindo para o aumento da preservação dos recursos naturais e melhorando a qualidade de vida no planeta.
                    </h3>
                    <img src={img} alt="Logo" className="imghome" />
                </div>
                <div id="divBusca">
                    <h1>Pesquisar</h1>
                    <div>
                    <label className="cep">
                        <p>Digite o CEP da cidade desejada .</p>
                        
                    <input type="text" placeholder="00000-000" className="cidade" value={cep} onChange={(e) => setcep(e.target.value)} required/>
                    </label>
                    </div>
                     	<button type="submit" id="buscar">Buscar</button>
                    </div>
                    </div>

                    </main>
                
            </form>
    )
}
export default Home
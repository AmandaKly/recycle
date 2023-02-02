import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cabecalho2 from "../components/Cabecalho2";
import React from 'react'
import axios from "axios";


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
        <div >
            <Cabecalho2/>
            <main>
                <div >
                    <h3 id="apresentacao" >
                        Busque pelos pontos de coleta ou informações sobre a coleta seletiva mais próximas de você!
                    </h3>
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
                   

                    </main>
                </div>
            </form>
    )
}
export default Home
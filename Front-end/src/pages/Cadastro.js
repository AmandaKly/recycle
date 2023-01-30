import Cabecalho from "../components/Cabecalho";
import React from 'react'

import axios from "axios";




function Cadastro() {
    
   
    const [nome,setnome]=React.useState('')
    const [login,setlogin]=React.useState('')
    const [cnpj,setcnpj]=React.useState('')
    const [ponto,setponto]=React.useState('')
    const [password,setpassword]=React.useState('')
    const [email,setemail]=React.useState('')
    const [tel,settel]=React.useState('')
   

    
    const Cadastro = (e) =>{
        e.preventDefault()
        const data = {
            nome:nome,
            login:login,
            senha:password,
            cnpj:cnpj,
            tipo_empresa:ponto, //empresa | coleta_seletiva
            email:email,
            telefone:tel
        }
        axios.post( 'http://127.0.0.1:3333/api/usuario',data)//rota que cadastra no server
         .then((response) =>{
             console.log('deu certo')
            return Promise.resolve(response)
        })
        //.catch((error)=> {
        //      return Promise.reject(error)
        //  })
        // console.log(data)
         
    }
    return (
        <>
        <Cabecalho />
            <main>
                
                <form onSubmit={Cadastro}>
                    <div id="Buscacadastrar">
                        <h1>Cadastre a sua empresa</h1>
                        <label>
                            <p>Nome da empresa</p>
                            <input type="text" placeholder="Digite aqui o nome da empresa" className="cidade" value={nome} onChange={(e) => setnome(e.target.value)} required/>
                        </label>
                        <label>
                            <p>Login</p>
                            <input type="text" placeholder="Digite aqui seu email" className="cidade" value={login} onChange={(e) => setlogin(e.target.value)} required/>
                        </label>
                        <label>
                            <p>Senha</p>
                            <input type="password" placeholder="Senha" className="cidade" value={password} onChange={(e) => setpassword(e.target.value)} required/>
                        </label>
                        <label>
                            <p>email</p>
                            <input type="email" placeholder="Ryclarn@gmail.com" className="cidade" value={email} onChange={(e) => setemail(e.target.value)} required/>
                        </label>
                        <label>
                            <p>CNPJ da empresa</p>
                        <input type="text" placeholder="Digite aqui seu CNPJ" className="cidade"
                        value={cnpj} onChange={(e) => setcnpj(e.target.value)} required/>
                        </label>
                        <label>
                            <p>Telefone</p>
                            <input type="telefone" placeholder="(84)99999-9999" className="cidade" value={tel} onChange={(e) => settel(e.target.value)} required/>
                        </label>

                        <h2>Qual o tipo de coleta sua empresa recebe?</h2>

                        <div className="dividir2">
                            <input type="radio" name="ponto" id="empresa"value={ponto} onChange={(e) => setponto(e.target.id)}
                             />
                            <label for='fisico'>Coleta em ponto fisico</label>
                        </div>
                        <div className="dividir2">
                            <input type="radio" name="ponto" id='coleta_seletiva'
                            value={ponto} onChange={(e) => setponto(e.target.id)} 
                            />
                            <label for='coleta'>Coleta Seletiva</label>

                        </div>
                        <button type="submit" id="cadastrar" > Cadastrar </button>


                    </div>
                </form>
            </main>
        </>
    )
}
export default Cadastro
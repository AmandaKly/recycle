import Cabecalho from "../components/Cabecalho";
import axios from "axios";
import React from 'react';
import imgpaglogin from "../imagens/imgpaglogin.png"
import '../css/login.css'
import api from "../services/api";



function Login() {
    const [login,setlogin]=React.useState('')
    const [password,setpassword]=React.useState('')
   

    
    const Login = (e) =>{
        e.preventDefault()
        const data = {
            
            login:login,
            senha:password
            
        }
        api.post( '/auth/login',data)//rota que cadastra no server
         .then((response) =>{
             alert('Login realizado com sucesso')
             window.location='http://localhost:3000/Ponto%20do%20usuario'
            return Promise.resolve(response)
        })
        .catch((error)=> {
            alert('login ou senha incorreta ')
            return Promise.reject(error)
             
          })
        
         
    }
    return(
        <>
        <Cabecalho/>
            <main>
            <div className="image">
            <div>
            <h3 id="Fraselogin" >
                    Faça login para cadastrar seus pontos de coleta ou as ruas que passa a coleta celetiva.
                    </h3>
                <img src={imgpaglogin} alt="imgpaglogin" className="imgpaglogin" />
            </div>
            <div id="buscarlogin">

                 <form onSubmit={Login}>
                 <label>
                     <p>Login</p>
                 <input type="text" placeholder="Login" className="cidade" value={login} onChange={(e) => setlogin(e.target.value)} required/>
                 </label>

                 <label>
                     <p>Senha</p>
                 <input type="password" placeholder="  *********" className="cidade" value={password} onChange={(e) => setpassword(e.target.value)} required/>
                 </label>
                 <button type="submit" className="submitformbutton">Entrar</button>
                </form>
            </div>
            
             </div>
         </main>
         </>
    )
}
export default Login
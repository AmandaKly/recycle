import Cabecalho from "../components/Cabecalho";
import axios from "axios";
import React from 'react'



function Login() {
    const [login,setlogin]=React.useState('')
    const [password,setpassword]=React.useState('')
   

    
    const Login = (e) =>{
        e.preventDefault()
        const data = {
            
            login:login,
            senha:password
            
        }
        axios.post( 'http://127.0.0.1:3333/api/auth/login',data)//rota que cadastra no server
         .then((response) =>{
             console.log('deu certo')
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
            <div id="buscarlogin">

                 <form onSubmit={Login}>
                 <label>
                     <p>Login</p>
                 <input type="text" placeholder="Login" className="cidade" value={login} onChange={(e) => setlogin(e.target.value)} required/>
                 </label>

                 <label>
                     <p>Senha</p>
                 <input type="text" placeholder="  *********" className="cidade" value={password} onChange={(e) => setpassword(e.target.value)} required/>
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
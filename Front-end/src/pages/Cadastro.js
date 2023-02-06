import Cabecalho from "../components/Cabecalho";
import React from 'react'
import InputMask from 'react-input-mask';
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
             alert('Cadastro realizado com sucesso')
             window.location='http://localhost:3000/Login'
            return Promise.resolve(response)
        })
        .catch((error)=> {
            alert('Seu cadastro não deu, certo tente novamente')
            return Promise.reject(error)
             
          })
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
                            <input type="text" placeholder="Escolha um login" className="cidade" value={login} onChange={(e) => setlogin(e.target.value)} required/>
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
                        <InputMask mask="99.999.999/0001-99" type="text" placeholder="Somente numeros" className="cidade"
                        value={cnpj} onChange={(e) => setcnpj(e.target.value)} required/>
                        </label>
                        <label>
                            <p>Telefone</p>
                            <InputMask mask="(99) 99999-9999" type="text" placeholder="(84)99999-9999" className="cidade" value={tel} onChange={(e) => settel(e.target.value)} required/>
                        </label>

                        <h2>Tipo de coleta da sua empresa</h2>

                        <div className="dividir2">
                            <input type="radio" name="ponto" id="empresa"value={ponto} onChange={(e) => setponto(e.target.id)}
                             />
                            <label >Coleta em ponto fisico</label>
                        </div>
                        <div className="dividir2">
                            <input type="radio" name="ponto" id='coleta_seletiva'
                            value={ponto} onChange={(e) => setponto(e.target.id)} 
                            />
                            <label >Coleta Seletiva</label>

                        </div>
                        <button type="submit" id="cadastrar" > Cadastrar </button>


                    </div>
                </form>
            </main>
        </>
    )
}
export default Cadastro
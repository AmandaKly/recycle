import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import '../App.css';
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import PontosDeColeta from "../pages/PontosDeColeta";
import ColetaSeletiva from "../pages/ColetaSeletiva";
import PontosDoUsuario from "../pages/PontosDoUsuario";
import CadastrarPontos from "../pages/cadastrarpontos";
import Cadastrocoleta from "../pages/cadastrocoleta";
import Coletausuario from "../pages/Coletausuario";


 function Routeres() {
  return (
        <div className="App">
         <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Pontos de coleta" element={<PontosDeColeta/>} />
            <Route path="/Coleta seletiva" element={<ColetaSeletiva />} />
            <Route path="/Ponto do usuario" element={<PontosDoUsuario/>} />
            <Route path="/CadastrarPontos" element={<CadastrarPontos/>} />
            <Route path="/Cadastrocoleta" element={<Cadastrocoleta/>} />
            <Route path="/ColetaUsuario" element={<Coletausuario />} />
    
    
          </Routes>
        </BrowserRouter>
        </div>
      );
}
export default Routeres;
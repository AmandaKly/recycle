import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import PontosDeColeta from "./pages/PontosDeColeta";
import ColetaSeletiva from "./pages/ColetaSeletiva";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Pontos de coleta" element={<PontosDeColeta/>} />
        <Route path="/Coleta seletiva" element={<ColetaSeletiva />} />


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

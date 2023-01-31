import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import './App.css';
import api from "./services/api";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import PontosDeColeta from "./pages/PontosDeColeta";
import ColetaSeletiva from "./pages/ColetaSeletiva";


export default function App() {
  return (
        <div className="App">
         <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Pontos de coleta" element={<PontosDeColeta/>} />
            <Route path="/Coleta seletiva" element={<ColetaSeletiva />} />
            <Route path="/Coleta seletiva" element={<ColetaSeletiva />} />
    
    
          </Routes>
        </BrowserRouter>
        </div>
      );
}
// function App() {
//   return (
//     <div className="App">
//      <BrowserRouter>
    
//     <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Cadastro" element={<Cadastro />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Pontos de coleta" element={<PontosDeColeta/>} />
//         <Route path="/Coleta seletiva" element={<ColetaSeletiva />} />


//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;

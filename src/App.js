import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroCliente from './pages/Cliente/CadastroCliente';
import ListaClientes from './pages/Cliente/ListaClientes';
import CarroForm from './pages/Veiculo/CarroForm';
import ListaCarros from './pages/Veiculo/ListaCarros';
import VendaForm from './pages/Venda/VendaForm';
import ListaVendas from './pages/Venda/ListaVenda';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const Private = ({ Item }) => {
    const { signed } = useAuth();
  
    return signed > 0 ? <Item /> : <Home />;
  };
   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/lista-clientes" element={<ListaClientes />} />
        <Route path="/cadastro-carro/:id?" element={<CarroForm />} />
        <Route path="/lista-carros" element={<ListaCarros />} />
        <Route path="/cadastro-venda/:id?" element={<VendaForm />} />
        <Route path="/lista-vendas" element={<ListaVendas />} />
      </Routes>
    </Router>
  );
}

export default App;

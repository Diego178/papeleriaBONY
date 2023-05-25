import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Inicio from './pages/Inicio';
import Ofertas from './pages/Ofertas';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import Registrarse from './pages/Registrarse';
import Login from './pages/Login';
import LoginNavbar from './pages/LoginNavbar'
import Producto from './pages/Producto'
import { useEffect, useState } from 'react';

function App() {

  const [login, setLogin] = useState(true);

  useEffect(() => {
    if(window.localStorage.getItem('token')){
        setLogin(false);
    }
  })
  return (
    <div className="App">
      <Router>
        {login ? <Navbar /> : <LoginNavbar />}
          <Routes>
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Producto/:id" element={<Producto />} />
            <Route path="/Ofertas" element={<Ofertas />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Registrarse" element={<Registrarse />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

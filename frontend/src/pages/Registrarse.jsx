

import React, { useState } from 'react';
import '../registro.css';

const Registrarse = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor o base de datos
    console.log('Formulario enviado:', { nombre, email, contrasena, confirmarContrasena });
  };
  

  return (

    <form className="formulario">
      <h1>Regístrate</h1>
      <div className="contenedor">
        <div className="input-contenedor">
          <i className="fas fa-user icon"></i>
          <input type="text" placeholder="Nombre Completo" />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-envelope icon"></i>
          <input type="text" placeholder="Correo Electrónico" />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon"></i>
          <input type="password" placeholder="Contraseña" id='contraRegistro' />
        </div>
        <input type="submit" value="Regístrate" className="button" />
        <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
        <p>¿Ya tienes una cuenta? <a className="link" href="loginvista.html">Iniciar Sesión</a></p>
      </div>
    </form>
  );
};

export default Registrarse;



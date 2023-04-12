import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msjErrorPass, setMsjErrorPass] = useState('');
    const navigate = useNavigate();



    const comprobarValores = (event) => {
      if(password.length > 7){
        event.preventDefault();
        enviarDatos(email, password);
      }else{
        alert('Los valores no son correctos')
        event.preventDefault();
      }
    }
    const enviarDatos = async (email, pass) => {
            axios.post('/get-user/', {
              email:email,
              password:pass
          })
        .then((response) =>{
            if(!response.data.includes('200')){
              alert('Lacuenta ingresada no existe')
            }else{
              navigate("/Inicio");
              alert('inicio de sesion 100')
            }
            }).catch(() => {
            alert('Error al conectarse a la base de datos')
        })
    }
      //Manejadores del Email
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };
    //Manejador del Password
    const handlePassword = (event) => {
      setPassword(event.target.value);
      (password.length < 7) ? setMsjErrorPass('La contraseña debe tener al menos 8 caracteres.') : setMsjErrorPass('');
    };
    

   return (
    <div className="w-full h-full flex items-center justify-center h-screen">
        <form className="flex-col space-x-1 space-y-4 w-4/12 h-4/6 order-black border-2 rounded-2xl shadow-2xl">
          <br/>
          <h1 className="text-3xl font-style: italic font-semibold text-blue-600">Iniciar Sesion</h1>
          <h2 className="text-sm font-semibold text-gray-400">Porfavor ingresa los datos solicitados</h2>
          <input
            type="email"
            value={email}
            id="email"
            name="email"
            placeholder="Ingresa un email"
            onChange={handleEmail}
            className="appearance-none border-b-2"
            />
          <br/>
          <input
            type="password"
            value={password}
            id="password"
            name="password"
            placeholder="Ingresa un password"
            onChange={handlePassword}
            className="appearance-none border-b-2"
            />
          <br/>
          <p className="text-red-500 text-xs">{msjErrorPass}</p>
          
          <button 
          type="submit" 
          id="button"
          onClick={event => {
              comprobarValores(event);
            }
          }
          className="inline-flex w-fit justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
          >Enviar</button>
          <br/>
  
          <a>Aun no tienes cuenta?</a>
          <Link className="text-blue-500" to="/Registrarse" >Registrate</Link>
        </form>
      </div>
  
  )
}

export default Login
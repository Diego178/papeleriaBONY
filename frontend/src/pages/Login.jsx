import React, { useState } from 'react'
import Modal from './ModalError';
import { Link } from 'react-router-dom'
import { validateEmail, validateField } from './Hook/useValidation';
import useForm from './Hook/useForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [estado, setEstado] = useState(false);
  const navigate = useNavigate();

  const enviarDatos = async (email, pass) => {
          axios.post('/get-user/', {
            email:email,
            password:pass

        })
      .then((response) =>{
          console.log(response)
      }).catch(() => {
          alert('Error...')
      })
  }

    const { values, setFieldValue, errors, handleSubmit } = useForm({
     initialValues: {
       email: '',
       pass: ''
     },
     validate: (property, value) => {
       const errorObj = {};
 
       switch (property) {
         case 'pass':
           const testName = validateField({
             pass: property,
             value,
             required: 'Por favor ingresa una contrasenia.',
             min: 8,
             shortValue: 'Ingresa un valor menor a 8 carácteres'
           });
           Object.assign(errorObj, testName);
           break;
         case 'email':
           const testEmail = validateEmail({
             value,
             required: 'Por favor ingresa un email',
             validEmail: 'El email que has ingresado no es correcto'
           });
           Object.assign(errorObj, testEmail);
           break;
       }
 
       return errorObj;
       
     },
     onSubmit: ({ values }) => {
      const { email, pass } = values;
      enviarDatos(email, pass)
      navigate('/Inicio', { replace: true });
     }})
    

   return (
    <div className="w-full h-full flex items-center justify-center h-screen">
        <form onSubmit={handleSubmit} className="flex-col space-x-1 space-y-4 w-4/12 h-4/6 order-black border-2 rounded-2xl shadow-2xl">
          <br/>
          <h1 className="text-3xl font-style: italic font-semibold text-blue-600">Iniciar Sesion</h1>
          <h2 className="text-sm font-semibold text-gray-400">Porfavor ingresa los datos solicitados</h2>
          <input
            type="text"
            value={values.email}
            placeholder="Ingresa un email"
            onChange={e => setFieldValue('email', e.target.value)}
            className="appearance-none border-b-2"
            />
          <br/>
          {errors.email && <span className="text-xs text-red-600 place-self-center">{errors.email}</span>}

          <input
            type="password"
            value={values.pass}
            //  className="textInput"
            placeholder="Ingresa una contrasenia"
            onChange={e => setFieldValue('pass', e.target.value)}
            className="appearance-none border-b-2"
          />
          <br/>
          {errors.pass && <span className="text-xs text-red-600 place-self-center">{errors.pass}</span>}
          
          <br/>
          
          <button 
          type="submit" 
          id="button"
          onClick={() => {
              setEstado(!estado);
          }}
          className="inline-flex w-fit justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
          >Enviar</button>

          <Modal
              estadoVentana = {estado}
              cambiarEstado = {setEstado}>
              <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Error</h3>
              <div className="mt-2">
              <p className="text-sm text-gray-500"><br/>{errors.email}<br/>{errors.pass}</p>
              </div>
              </Modal>
              <br/>
          <a>Aun no tienes cuenta?</a>
          <Link className="text-blue-500" to="/Registrarse" >Registrate</Link>
        </form>
      </div>
  )
}

export default Login
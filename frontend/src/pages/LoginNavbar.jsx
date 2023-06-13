import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
const imagen = require.context('../assets/navbar/', true);

function LoginNavbar() {


  return (
    <nav className="bg-gray-800 sticky z-10">
        <div className="relative flex h-17 items-center justify-between">
          <Link to='/Inicio'>

            <img 
            className="w-18 h-14 mx-3 py-1"  
            src={imagen(`./icono.png`)} alt=''/>

          </Link>
          <div className="hidden sm:ml-6 sm:block flex-center">
            <div className="flex space-x-4">
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-xl font-medium"
                to='./Inicio'>Inicio</Link>

              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-xl font-medium"
               to='./Ofertas'>Ofertas</Link>

              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-xl font-medium"
               to='/Contacto'>Contacto</Link>
            </div>
          </div>

            <div className="flex-1 align-content: flex-end">
              <div className="flex justify-end space-x-4 my-2">

                <Dropdown className=''>
                  <Dropdown.Toggle className='h-4/6' variant="success" id="dropdown-basic">
                  <img 
                    className="w-11 h-9 px-2 py-1"  
                    src={imagen(`./perfil.png`)} alt=""  />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item >Perfil</Dropdown.Item>
                    <Dropdown.Item >Pedidos</Dropdown.Item>
                    <Dropdown.Item 
                    className='hover:bg-red-400'
                    onClick={event => {
                      window.localStorage.removeItem('token');
                      window.location.reload(true)
                      }
                    }
                    >Cerrar sesion</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                          

                <Link to='/Carrito'>
                  <img src={imagen(`./carrito.png`)}width="50" alt="" />
                </Link>
                </div>
            </div>
          </div>
      </nav>
  )
}

export default LoginNavbar
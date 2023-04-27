import React from 'react'
import { Link } from 'react-router-dom'
const imagen = require.context('../assets/navbar/', true);

function LoginNavbar() {
  return (
    <nav className="bg-gray-800 sticky">
        <div className="relative flex h-17 items-center justify-between">
          <Link to='/Inicio'>

            <img 
            className="w-23 h-14 mx-auto py-1"  
            src={imagen(`./logo.png`)}/>

          </Link>
          <div className="hidden sm:ml-6 sm:block flex-center">
            <div className="flex space-x-4">
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-md font-medium"
                to='./Inicio'>Inicio</Link>

              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-md font-medium"
               to='./Ofertas'>Ofertas</Link>

              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-md font-medium"
               to='/Contacto'>Contacto</Link>
            </div>
          </div>

            <div className="flex-1 align-content: flex-end">
              <div className="flex justify-end space-x-4">
                <button>
                    <img 
                    className="w-14 h-12 px-3 py-2"  
                    src={imagen(`./perfil.png`)}/>
                </button>
                {/* <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    {/* <img src={IconPerfil} alt="logo" width="40" height="40" /> */}
                  {/* </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href='/logIn'>Iniciar Sesión</MDBDropdownItem>
                    <MDBDropdownItem link href='/signUp'>Crear cuenta</MDBDropdownItem>
                    <MDBDropdownItem link href='/cupones'>Cupones</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown> */} 
                <button 
                type="submit" 
                id="button"
                onClick={event => {
                    window.localStorage.removeItem('token');
                    window.location.reload(true)
                  }
                }
                 className="bg-gray-900 text-white rounded-md text-sm font-large hover:bg-gray-700">
                Cerrar Sesion
                </button> 

                <Link to='/Carrito'>
                  <img src={imagen(`./carrito.png`)}width="50"/>
                </Link>
                </div>
            </div>
          </div>
      </nav>
  )
}

export default LoginNavbar
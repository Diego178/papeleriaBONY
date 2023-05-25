import React from 'react'
import { Link } from 'react-router-dom'
const imagen = require.context('../assets/navbar/', true);


const Navbar = () => {
  return (
      <nav className="bg-gray-800 sticky">
        <div className="relative flex h-17 items-center justify-between">
          <Link to='/Inicio'>

            <img 
            className="w-23 h-16 mx-auto py-1"  
            src={imagen(`./icono.png`)} alt='' />
          
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
              <div className="flex justify-end space-x-4 mr-3">
                <Link className="bg-gray-900 hover:bg-gray-600  text-white rounded-md px-2 py-2 text-xl " aria-current="page" to='/Registrarse'>Registrarse</Link>
                <Link className="bg-gray-900 hover:bg-gray-600 text-white rounded-md px-2 py-2 text-xl mr-20" aria-current="page" to='/Login'>Login</Link>
                {/* <Link to='/Carrito'>
                  <img src={imagen(`./carrito.png`)}width="50" alt='' />
                </Link> */}
                </div>
            </div>
          </div>
      </nav>
  )
}

export default Navbar
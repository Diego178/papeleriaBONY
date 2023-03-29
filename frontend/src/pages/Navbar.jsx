import React from 'react'
import { Link } from 'react-router-dom'
const imagen = require.context('../assets/', true);


const Navbar = () => {
  return (
      <nav className="bg-gray-800">
        <div className="relative flex h-16 items-center justify-between">
          <Link to='/Inicio'>

            <img 
            className="w-11 h-11 rounded-full mx-auto"  
            src={imagen(`./lapiz.jpg`)}
            width="50"/>

          </Link>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                to='./Inicio'>Inicio</Link>

              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
               to='./Ofertas'>Ofertas</Link>

              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
               to='/Mayoreo'>Mayoreo</Link>
            </div>
          </div>

            <div className="flex-1 align-content: flex-end">
              <div className="flex justify-end space-x-4">
                <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" to='/Registrarse'>Registrarse</Link>


                <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" to='/Login'>Login</Link>
              

                <Link to='/Carrito'>
                  <img src={imagen(`./carrito.png`)}width="50"/>
                </Link>
                </div>
            </div>
          </div>
      </nav>
  )
}

export default Navbar
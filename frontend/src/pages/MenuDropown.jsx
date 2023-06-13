import React from "react"
import { Link } from 'react-router-dom'
import Cookies from "universal-cookie";

function MenuDropdown(){

    const cookie = Cookies()
    return(
    <div className='flex flex-col dropdownMenu position:absolute justify-center'>
        <ul className='flex flex-col gap-4 justify-center '>
            <li><Link className="text-black hover:bg-gray-400 hover:text-white rounded-md px-4 py-2 text-md font-medium hover:bg-gray-900"
                to='./Inicio'>Cuenta</Link></li>
            <li><Link className="text-black hover:bg-gray-400 hover:text-white rounded-md px-4 py-2 text-md font-medium hover:bg-gray-900"
                to='./Inicio'>Pedidos</Link></li>
            <li><button 
                type="submit" 
                id="button"
                onClick={event => {
                    window.localStorage.removeItem('token');
                    cookie.remove('id', { path: '/' })
                    window.location.reload(true)
                  }
                }
                 className="text-gray-300 text-black rounded-md text-sm font-large px-2 py-2 font-medium hover:bg-red-300 ">
                Cerrar Sesion
                </button></li>
        </ul>
    </div>
    )
}

export default MenuDropdown
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <form className="max-w-xl justify-center">
      <div className=" max-w-md justify-self-center">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Iniciar Sesion</h2>

            <div className="sm:col-span-4">
              <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Correo Electronico</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Contrasenia</label>
              <div className="mt-2">
                <input id="password" name="password" type="password" autocomplete="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
              <button type="submit" className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar sesion</button>
            </div>

            <div className="flex items-center justify-center gap-x-1">
              <h2 className="text-base font-semibold leading-7 text-gray-900">¿No tienes cuenta?</h2>
              <Link className="text-base font-semibold leading-7 text-blue-600" to='/Registrarse'>Únete</Link>
              </div>

          </div>
        </div>
    </form>
  )
}

export default Login
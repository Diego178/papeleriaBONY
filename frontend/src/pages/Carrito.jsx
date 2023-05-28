import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductoCarrito from './ProductoCarrito'
import Cookies from 'universal-cookie'

const cockies = new Cookies()

  const id = cockies.get('id')


const Carrito = () => {

  
  const [productos, setProductos] = useState([])

  useEffect(() => {
    axios.get(`/carrito_producto/${id}/`)
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        alert(error);
      });
}, []);


  return (
    <div className='my-10 justify-items-start' > 
    <p className='text-5xl font-bold py-10' >Carrito de compras</p>
      <div className='flex flex-row justify-around'>
      {productos && 
        <div className='w-4/6'>
          {productos.map(producto => (
            <ProductoCarrito key={producto.id}  id={producto.id_producto} id_carrito={producto.id} cantidad={producto.cantidad} />
              
          ))}

      </div>
      }
      <div className='w-3/12 self-start border-solid border black rounded-3xl border-2 px-4 '>
        
        <h1 className="w-2/6 pt-8 pb-1" style={{ textAlign: 'left' }}>
          Precio total: $XXX.XX 
        </h1>

        <h1 className="w-2/6 py-1" style={{ textAlign: 'left' }}>
          Descuento: $XX.XX
        </h1>
        
        <h1 className="w-2/6 pt-1 pb-4" style={{ textAlign: 'left' }}>
          Total: $XXX.XX
        </h1>
        <button
          className="h-14 w-50 text-black text-xl hover:bg-sky-300 bg-blue-400 rounded-lg ">
          Realizar compra
        </button>

        <p>.</p>
      </div>
    </div>
      
  </div>
  )
}

export default Carrito
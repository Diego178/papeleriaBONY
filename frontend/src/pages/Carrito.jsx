import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductoCarrito from './ProductoCarrito'
import Cookies from 'universal-cookie'

const Carrito = () => {

  const cockies = new Cookies()

  const id = cockies.get('id')

  const [productos, setProductos] = useState([])

  useEffect(() => {
    axios.get(`/carrito_producto/${id}/`)
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        alert(error);
      });
}, id);

  return (
    <div className='my-10'> 
    <p>Carrito de compras</p>
      {productos && 
        <div className='w-5/6'>
          {productos.map(producto => (
            <ProductoCarrito key={producto.id}  id={producto.id_producto} id_carrito={producto.id} cantidad={producto.cantidad} />

          ))}

      </div>
      }
      
    </div>
  )
}

export default Carrito
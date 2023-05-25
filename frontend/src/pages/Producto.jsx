import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Cookies from "universal-cookie";
const imagen = require.context('../assets/navbar/', true);

const Producto = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState(null)
    const [cantidad, setCantidad] = useState(0);
    const cockies = new Cookies()

    useEffect(() => {
        axios.get(`/productos/${id}`)
          .then(response => {
            setProducto(response.data);
            console.log(id);
          })
          .catch(error => {
            console.error("Error al obtener el producto:", error);
          });
      },  []);

      const handleAgregarProducto = async() => {
        axios.post(`/carrito_producto/post/`, 
        {
          'id_usuario': cockies.get('id'),
          'id_producto': producto.id,
          'cantidad': cantidad
        })
          .then(response => {
            setProducto(response.data);
          })
          .catch(error => {
            console.error("Error al obtener el producto:", error);
          });
        alert('producto agregado correctamente...')
      }

      const handleCantidad = (event) => {
          setCantidad(event.target.value)
      }

      

    return(

        <div className="justify-self-start border-solid border black rounded-3xl border-2 mx-10 my-3">
            {producto &&
            <div className="flex flex-row ">
                <div className="mx-10 my-10 ">
                    <img src={producto.imagen} alt="" className="h-5/6 w-6/6 object-cover object-center border-solid border black rounded-3xl border-2"  />
                </div>
                <div className="flex flex-col w-5/6 h-6/6 justify-stretch">
                    <h1 className="justify-self-start">
                        {producto.nombre}
                    </h1>
                    <p className="justify-start">
                    {producto.precio}
                    </p>
                    <p>
                    {producto.categoria}
                    </p>
                    <p>
                    {producto.descripcion}
                    </p>
                    <Form.Select aria-label="Default select example" 
                    className="w-25"
                    value={cantidad}
                    onChange={handleCantidad}
                    >
                      {Array.from({ length: producto.cantidad }, (_, index) => (
                        <option key={index + 1} value={index + 1}>{index + 1}</option>
                      ))}
                    </Form.Select>
                    <p>
                    {producto.cantidad}
                    </p>
                    <Link to='/Carrito'
                    onClick={handleAgregarProducto}
                    className="w-40 flex text-gray-300 bg-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-md font-medium">
                        <p>Agregar al carrito</p>
                    <img src={imagen(`./carrito.png`)}width="50" alt="" />
                    </Link>

                </div>
             </div>
             }

              
        </div>
        
    )
}

export default Producto
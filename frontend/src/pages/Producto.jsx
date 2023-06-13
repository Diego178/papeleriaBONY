import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { Form, Modal, Button } from 'react-bootstrap';
import axios from 'axios'
import Cookies from "universal-cookie";
const imagen = require.context('../assets/navbar/', true);

const Producto = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState(null)
    const [cantidad, setCantidad] = useState(0);
    const [show, setShow] = useState(false)
    const cockies = new Cookies()

    useEffect(() => {
        axios.get(`/productos/${id}`)
          .then(response => {
            setProducto(response.data);
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
      }

      const handleCantidad = (event) => {
        setCantidad(event.target.value)
      }

      const handleShow = () => {
        setShow(true)
      }

      const handleClic = () => {
        setShow(true);
        handleAgregarProducto();
      }

      

    return(

      <div className="flex justify-center w-full pb-80 pt-12">

        <div className=" border-solid border black rounded-3xl border-2 justify-self-center w-4/6 ">
            {producto &&
            <div className="flex flex-row ">
                <div className="mx-2 my-2 ">
                    <img src={producto.imagen} alt="" className="h-6/6 max-w-md object-cover object-center "  />
                </div>
                <div className="flex flex-col w-6/6 h-6/6 justify-self-end pl-20">
                    <h1 className="justify-self-start text-5xl pt-10 font-bold" style={{ textAlign: 'left' }}>
                        {producto.nombre}
                    </h1>

                    <h1 className="justify-start text-xl pt-2 pb-2" style={{ textAlign: 'left' }}>
                        ${producto.precio}
                    </h1>
                      <h1 className="text-lg" style={{ textAlign: 'left' }}>
                          Categoria: {producto.categoria}
                      </h1>

                    <h1 className="pt-2 pb-3" style={{ textAlign: 'left' }} >
                        {producto.descripcion}
                    </h1>

                    <Form.Select aria-label="" 
                        className="w-20"
                        value={cantidad}
                        onChange={handleCantidad}>
                          {Array.from({ length: producto.cantidad }, (_, index) => (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                          ))}
                    </Form.Select>
                    
                    <br/>

                    <Link to='/Carrito'
                        onClick={handleClic}
                        className="w-40 flex text-black-300 bg-sky-500 hover:bg-gray-700 hover:text-white rounded-md justify-center items-center">
                        <h1 className="text-lg" >Agregar al carrito</h1>
                          <img src={imagen(`./carrito.png`)}width="50" alt="" />
                    </Link>
 
                </div>
             </div>
             }

              
        </div>
          <Modal show={show}>
             <Modal.Title>
              Se agrego el producto correctamente al carrito
             </Modal.Title>
             <Modal.Footer>
                <Button className="bg-sky-600 text-white hover:bg-sky-300" onClick={handleShow} >
                  aceptar
                </Button>
             </Modal.Footer>
          </Modal>

        </div>

        
        
    )
}

export default Producto
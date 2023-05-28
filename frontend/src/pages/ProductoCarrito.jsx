import React, {useEffect, useState} from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardImage,
    MDBRow
  } from "mdb-react-ui-kit";
  import axios from "axios";
import { Button, Modal } from "react-bootstrap";


const ProductoCarrito = (props) => {

    const [show, setShow] = useState(false)
    const [producto, setProducto] = useState([])

    const handleShow = () => {
      setShow(!show)
    }

    const handleDelete = () => {
      axios.delete(`/carrito_producto/delete/${props.id_carrito}`)
      .then((response) => {
        setShow(!show)
        window.location.reload(true)
      }).catch((error) => {
        console.log(error)
      })
    }

    useEffect(() => {
        axios.get(`/productos/${props.id}`)
        .then((response) => {
            setProducto(response.data)
        }).catch((error) => {
          alert(error)
        })
      }, [])

    return(
      <>
        <MDBRow md="2" lg="2" className="">
                <MDBCard key={producto.id} className="flex flex-row h-50 w-full">
                    <MDBCardImage
                    className="w-1/6"
                      src={producto.imagen}
                      position="top"
                      alt="Laptop"
                    />
                    <MDBCardBody className="flex flex-col justify-content-start" >

                        <h1 className="w-2/6 text-lg font-bold" style={{ textAlign: 'left' }}>
                          {producto.nombre}
                        </h1>

                        <h1 className="w-2/6" style={{ textAlign: 'left' }}>
                          Precio unitario: ${producto.precio}
                        </h1>

                        <h1 className="w-2/6" style={{ textAlign: 'left' }}>
                          Precio neto: ${producto.precio * props.cantidad}
                        </h1>

                        <h1 className="w-2/6" style={{ textAlign: 'left' }}>
                          {producto.categoria}
                        </h1>
                        <p className="w-2/6" style={{ textAlign: 'left' }}>
                          Cantidad: {props.cantidad}
                        </p>

                    </MDBCardBody>
                    <div className="self-center h-full">
                    <button
                      className="h-10 w-20 text-white hover:bg-red-300 bg-red-700 rounded-lg"
                      onClick={handleShow}>
                        borrar
                      </button>
                    </div>
                    
  
                  </MDBCard>
                  </MDBRow>
                <Modal show={show}>
                  <Modal.Title>
                    Estas seguro de realizar esta accion?
                  </Modal.Title>
                  <Modal.Body>
                    Al hacer clic en aceptar de borrara el producto de su carrito de compras
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className="bg-gray-300" onClick={handleShow} >Cancelar</Button>
                    <Button className="bg-red-400" onClick={handleDelete} >Aceptar</Button>
                  </Modal.Footer>
                </Modal>

                  </>
    )
}

export default ProductoCarrito
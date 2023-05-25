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
        <MDBRow md="2" lg="2" className="mb-3 mb-lg-0">
                <MDBCard key={producto.id} className="flex flex-row">
                    <MDBCardImage
                    className="w-1/6 "
                      src={producto.imagen}
                      position="top"
                      alt="Laptop"
                    />
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <p className="small">
                          <a href="#!" className="text-muted">
                            {props.categoria}
                          </a>
                        </p>
                      </div>
        
                      <div className="d-flex justify-content-between mb-3">
                        <h5>{props.id_carrito}</h5>
                        <h5 className="mb-0">{producto.nombre}</h5>
                        <h1>Precio unitario:</h1>
                        <h5 className="text-dark mb-0">${producto.precio}</h5>
                        <h1>Precio neto:</h1>
                        <h5 className="text-dark mb-0">${producto.precio * props.cantidad}</h5>
                      </div>
        
                      <div className="d-flex justify-content-between mb-2">
                        <p className="text-muted mb-0">
                          Cantidad: <span className="fw-bold">{props.cantidad}</span>
                        </p>
                      </div>
                      <button
                      className="h-10 w-20 hover:bg-gray-700 bg-red-300 rounded-lg"
                      onClick={handleShow}>
                        borrar
                      </button>
                    </MDBCardBody>
  
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
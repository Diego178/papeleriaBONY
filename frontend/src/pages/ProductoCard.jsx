import React, { useState, useEffect } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol
  } from "mdb-react-ui-kit";

  import {MDBContainer,MDBRow} from "mdb-react-ui-kit";
import axios from 'axios';
import { Link } from 'react-router-dom';


function ProductoCard(props) {

  const [productos, setProductos] = useState([]);

  useEffect(() =>{
    axios.get('/productos/')
    .then((response) => {
      setProductos(response.data)
      console.log(productos);
    }).catch(() => {
      alert('Algo fue mal...')
    })
  }, [])

  const handleClic = () =>{

  }



  return (
    <div >
      

      <MDBContainer fluid className="my-5" onClick={handleClic} >
          <MDBRow>
              {productos.map(producto => (
                <MDBCol md="2" lg="2" className="mb-3 mb-lg-0">
                  <Link to={`/Producto/${producto.id}`}>
                <MDBCard>
                    <MDBCardImage
                      src={producto.imagen}
                      position="top"
                      alt="Laptop"
                    />
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <p className="small">
                          <a href="#!" className="text-muted">
                            {producto.categoria}
                          </a>
                        </p>
                        <p className="small text-danger">
                          <s>$1099</s>
                        </p>
                      </div>
        
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{producto.nombre}</h5>
                        <h5 className="text-dark mb-0">${producto.precio}</h5>
                      </div>
        
                      <div className="d-flex justify-content-between mb-2">
                        <p className="text-muted mb-0">
                          Disponibles: <span className="fw-bold">{producto.cantidad}</span>
                        </p>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                  </Link>
                  </MDBCol>
                
              ))}
          </MDBRow>
      </MDBContainer>



        
    </div>
  )
}

export default ProductoCard
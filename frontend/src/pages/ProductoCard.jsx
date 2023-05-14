import React, { useState, useEffect } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol
  } from "mdb-react-ui-kit";

  import {MDBContainer,MDBRow} from "mdb-react-ui-kit";
import axios from 'axios';


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



  return (
    <div>

      <MDBContainer fluid className="my-5">
          <MDBRow>
              {productos.map(producto => (
                <MDBCol md="2" lg="2" className="mb-3 mb-lg-0">
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
                  <button 
                    // type="b" 
                    id="button"
                    // onClick={event => {
                    //     comprobarValores(event);
                    //     }
                    // }
                    className="inline-flex w-fit justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                  >Agregar al carrito</button>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                
              ))};
          </MDBRow>
      </MDBContainer>



        
    </div>
  )
}

export default ProductoCard
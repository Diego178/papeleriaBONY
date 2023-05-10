import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBCol
  } from "mdb-react-ui-kit";


function ProductoCard() {
  return (
    <div>
        <MDBCol md="10" lg="4" className="mb-3 mb-lg-0">
        <MDBCard>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Laptops
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$1099</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">HP Notebook</h5>
                <h5 className="text-dark mb-0">$999</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Disponibles: <span class="fw-bold">6</span>
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
    </div>
  )
}

export default ProductoCard
import React, { useState, useEffect } from 'react'
import Carrusel from './Carrusel'
import ProductoCard from './ProductoCard'
import {MDBContainer,MDBRow,MDBCol,} from "mdb-react-ui-kit";
import axios from 'axios';

const Inicio = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() =>{
    axios.get('/productos/')
    .then((response) => {
      setProductos(response.data)
    }).catch(() => {
      alert('Algo fue mal...')
    })
  }, [])


  return (
    <>
      <Carrusel />
      <MDBContainer fluid className="my-5">
      <MDBRow>
        {productos.map(producto => {
          <MDBCol>
          <ProductoCard />
          </MDBCol>
        })};
      </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Inicio
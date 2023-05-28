import React from 'react'
import ProductoCard from './ProductoCard'


const Inicio = () => {
  return (
    <div>
       <img alt='' src={require('../assets/Imagenes/slider0.png')} ></img>
      <ProductoCard/>
      <img alt='' src={require('../assets/Imagenes/slider2.jpg')} ></img>
    </div>
  )
}

export default Inicio
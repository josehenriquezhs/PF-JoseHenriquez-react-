import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify';


const ItemDetail = ({id, nombre, precio, img, stock, descripcion}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

   
    const item = {id, nombre, precio}
    agregarAlCarrito (item, cantidad)
    toast.success("Su compra fue agg al carrito",{autoClase:1000, theme: "dark", position: "top-right"})
  }

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio {precio} </h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>{descripcion}</p>
        {

          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }

    </div>
  )
}

export default ItemDetail
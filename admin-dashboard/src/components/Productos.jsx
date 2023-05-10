import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import axios from 'axios';

function Productos() {

  const [productos, setProductos] = useState([]);
  const [record, setRecord] = useState(null);
  const [show, setShow] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  //Trae los datos de la DB
  useEffect(() =>{
    axios.get('/productos/')
    .then((response) => {
      setProductos(response.data)
    }).catch(() => {
      alert('Algo fue mal...')
    })
  }, [])

  //handle del formulario

  const handleId = (e) => {
    setRecord({
      ...record, 
      id: e.target.value
    })
  }

  const handleNombre = (e) => {
    setRecord({
      ...record, 
      nombre: e.target.value
    })
  }

  const handleDescripcion = (e) => {
    setRecord({
      ...record, 
      descripcion: e.target.value
    })
  }

  const handlePrecio = (e) => {
    setRecord({
      ...record, 
      precio: e.target.value
    })
  }

  const handleCantidad = (e) => {
    setRecord({
      ...record, 
      cantidad: e.target.value
    })
  }

  const handleCategoria = (e) => {
    setRecord({
      ...record, 
      categoria: e.target.value
    })
  }

  const handleImagen = (e) => {
    setRecord({
      ...record, 
      imagen: e.target.value
    })
  }
  

  const handleClose = () => {
    setShow(false);
  }

  const handleCerrar = () => {
    setMostrar(false);
  }

  const handleSaveChanges = async ()=> {
    await handleUpdate(record.id, {id: record.id, name: record.name, email: record.email, phone: record.phone, isAdmin: record.isAdmin, direccion: "Xalapa", password: "perros12"});
    handleClose();
}

const handleDelete = (id) => {
    
}

const handleUpdate = async (id, value) => {
  console.log(value);
  return axios.put(`/productos/${id}/`, value)
  .then((response) =>{
      const { data } = response;
      const productosNuevos = productos.map (producto => {
          if (producto.id === id ) {
              return data;
          }
          return producto;
      })
      setProductos(productosNuevos)
  }).catch(() => {
      alert('Error...')
  })
}




  return (
    <>
      <ListGroup>
        {productos.map(producto => {
          return (
                              
            <ListGroupItem key={producto.id} className='d-flex justify-content-between align-items-center'>
              
              {/* atributos del empleado */}
              {"ID: "+producto.id+" "}
              {"Nombre: "+producto.nombre+" "}
              {/* {"Descripcion: "+producto.descripcion+" "} */}
              {"Precio: "+producto.precio+" "}
              {"Cantidad: "+producto.cantidad+" "}
              {"Categoria: "+producto.categoria+" "}
              {/* {"Precio: "+producto.precio+" "} */}
                
              
              <div>
                <FaEdit 
                  onClick={() => {setRecord(producto); setShow(true)}}
                  size={20} style={{cursor: 'pointer'}}/>
                        
                <FaTrashAlt 
                  onClick={() => {setMostrar(true)}}
                  size={20} style={{cursor: 'pointer'}}/> 
              </div>
             
            </ListGroupItem>
            
          )
        })}
      </ListGroup>

      {/* //Modal formulario */}
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <Modal.Title>
            Editar Cuenta
         </Modal.Title>
        </ModalHeader>
        <Modal.Body>
          ID: 
          <FormControl
            value={record ? record.id: ''}
            onChange={handleId}/>
            Nombre:
          <FormControl
            value={record ?record.nombre: '' }
            onChange={handleNombre}
          />
          Precio:
          <FormControl
            value={record ? record.precio: '' }
            onChange={handlePrecio}
          />
          Cantidad:
          <FormControl
            value={record ? record.cantidad: ''}
            onChange={handleCantidad}
          />
          Categoria:
          <FormControl
            value={record ? record.categoria: ''}
            onChange={handleCategoria}
          />
          Descripcion:
          <FormControl
            value={record ? record.descripcion: ''}
            onChange={handleDescripcion}
          />

          Imagen:
          <FormControl
            value={record ? record.imagen: ''}
            onChange={handleImagen}
          />

        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='dark' onClick={handleSaveChanges}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* //Modal delete */}
      <Modal show={mostrar} onHide={handleCerrar}>
      <Modal.Title>
            Estas seguro de borrar la cuenta?
         </Modal.Title>
         <Modal.Body>
            Al realizar esta accion la cuenta sera eliminada permanentemente
         </Modal.Body>
         <Modal.Footer>
      <Button variant='dark' onClick={handleCerrar}>
        Cancelar
      </Button>
      <Button variant='danger' onClick={handleDelete}>
        Borrar
      </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default Productos
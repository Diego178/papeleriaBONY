import React, {useState, useEffect} from 'react'
import '../styles/productos.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import axios from 'axios';
import ModarlError from './ModarlError';


function Productos() {
  //recide los productos de la base de datos
  const [productos, setProductos] = useState([]);
  const [record, setRecord] = useState(null);
  //maneja el formulario editar producto
  const [show, setShow] = useState(false);
  //maneja el modal delete (advertencia)
  const [mostrar, setMostrar] = useState(false);
  //maneja el modal de post formulario
  const [mostrarModalPost, setMostrarModalPost] = useState(false);
  //guarda el producto que se posteara
  const [productoPost, setProductoPost] = useState(null);
  const [errores, setErrores] = useState('');
  const [showModalError, setShowModalError] = useState(false)



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
    await handleUpdate(record.id, {id: record.id, nombre: record.nombre, precio: record.precio, cantidad: record.cantidad, categoria: record.categoria, descripcion: record.descripcion, imagen: record.imagen});
    handleClose();
}

const handleDelete = (id) => {
    
}

const handleUpdate = async (id, value) => {
  console.log(value);
  return axios.put(`/productos/put/${id}/`, value)
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


const handleCloseModalPost = () => {
  setMostrarModalPost(false)
}

const handleCloseModalError = () => {
  setShowModalError(!showModalError);
}

const handleGuardarPost = async ()=> {
  if(comprobar()){
    handlePost({nombre: record.nombre, descripcion: record.descripcion, precio: record.precio, cantidad: record.cantidad, categoria: record.categoria, imagen: record.imagen});
    handleCloseModalPost();
  }
}

function comprobar() {
  if (!record) {
    console.log(record+" entro");
    setShowModalError(true);
    setErrores('Error, no existen datos ingresados');
    return false;
  }
  else{
    return true;
  }
}

const handlePost = async (value) => {
  console.log(value);
  return axios.post(`/productos/post/`, value)
  .then((response) =>{
      const { data } = response;
      setProductos([
        ...productos,
        data
    ])

  }).catch(() => {
      alert('Error...')
  })
}




  return (
    <div className='contenido'>

      <div className='top '>

        <h1>
          Lista de productos
        </h1>
        <Button 
          className="boton-agregar"
          onClick={() => {setRecord(productoPost); setMostrarModalPost(true)}}>
        Agregar producto</Button>
      </div>
    


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
            Editar Producto
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

    {/* Modal formulario Post producto */}
    <Modal show={mostrarModalPost} onHide={handleCloseModalPost}>
        <ModalHeader closeButton>
          <Modal.Title>
            Crear Producto
         </Modal.Title>
        </ModalHeader>
        <Modal.Body>
          {/* ID: 
          <FormControl
            value={record ? record.id: ''}
            onChange={handleId}/> */}
            Nombre:
          <FormControl
            value={record ? record.nombre : '' }
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
          <Button variant='dark' onClick={handleCloseModalPost}>
            Cerrar
          </Button>
          <Button variant='dark' onClick={handleGuardarPost}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <ModarlError show={showModalError} onClose={handleCloseModalError}> {errores} </ModarlError>
    </div>
  )
}

export default Productos
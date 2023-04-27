import React, {useState, useEffect} from 'react';
import '../styles/cuentas.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import axios from 'axios';

function Cuentas() {

  
  const [cuentas, setCuentas] = useState([]);
  const [record, setRecord] = useState(null);
  const [show, setShow] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  //Trae los datos de la DB
  useEffect(() =>{
    axios.get('/cuentas/')
    .then((response) => {
      setCuentas(response.data)
    }).catch(() => {
      alert('Algo fue mal...')
    })
  }, [])

  //Funcion para borrar la cuenta
  const handleDelete = (id) => {
    
    // axios.delete(`/delete/${id}/`)
    // .then(() => {
    //     const nuevasCuentas = cuentas.filter(cuenta => {
    //         return cuenta.id !== id
    //     });
    //     setCuentas(nuevasCuentas)
    // }).catch(() => {
    //     alert('algo malo paso...')
    // })
  }


  // Handles para los atributos de la cuenta
  const handleId = (e) => {
    setRecord({
        ...record, 
        id: e.target.value
    })
  }

  const handleName = (e) => {
    setRecord({
        ...record, 
        name: e.target.value
    })
  }

  const handleEmail = (e) => {
    setRecord({
        ...record, 
        email: e.target.value
    })
  }

  const handlePhone = (e) => {
    setRecord({
        ...record, 
        phone: e.target.value
    })
  }

  //Cambiadores del estado del modal form

  const handleClose = () => {
    setShow(false);
  }

  const handleCerrar = () => {
    setMostrar(false);
  }

  const handleSaveChanges = async ()=> {
      //await handleUpdate(record.id, {id: record.id, name: record.name, addres: record.addres, salary: record.salary});
      handleClose();
  }
    

  return (
    <>
      <ListGroup>
        {cuentas.map(cuenta => {
          return (
                              
            <ListGroupItem key={cuenta.id} className='d-flex justify-content-between align-items-center'>
              
              {/* atributos del empleado */}
              {"ID: "+cuenta.id+" "}
              {"Nombre: "+cuenta.name+" "}
              {"Email: "+cuenta.email+" "}
              {"Telefono: "+cuenta.phone+" "}
              {cuenta.isAdmin ? "La cuenta es admin " : "La cuenta es comprador "}
                

              <div>
                <FaEdit 
                  onClick={() => {setRecord(cuenta); setShow(true)}}
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
            value={record ?record.name: '' }
            onChange={handleName}
          />
          Email:
          <FormControl
            value={record ? record.email: '' }
            onChange={handleEmail}
          />
          Telefono:
          <FormControl
            value={record ? record.phone: ''}
            onChange={handlePhone}
          />
          <Form.Select>
            <option>Admin</option>
            <option>Comprador</option>
        </Form.Select>
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

export default Cuentas
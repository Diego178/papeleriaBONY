import React, { useState} from 'react'
import { Modal, ModalBody, Button } from 'react-bootstrap'

function ModarlError(props) {
  const [show, setShow] = useState(props.show);



    const handleShow = () => {
      props.onClose(false);
    }
    
  return (
    <Modal show={props.show}>
        <ModalBody>
            {props.children}
        </ModalBody>
        <Modal.Footer>
          <Button variant='blue' onClick={handleShow}>
            Aceptar
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModarlError
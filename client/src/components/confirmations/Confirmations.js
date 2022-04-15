import ConfirmationList from './ConfirmationList';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ConfirmationForm from './ConfirmationForm';

const Confirmations = () => {
  const [adding, setAdd] = useState(false);

  return(
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <ConfirmationForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>Confirmations</h1>
      <ConfirmationList />
    </>
  )
}

export default Confirmations;
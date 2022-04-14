import AddressForm from './AddressForm';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddressEdit = ({ id, street, city, state, zip }) => {
  const [editing, setEdit] = useState(false);
  
  return (
    <>
      <Button onClick={() => setEdit(true)}>
        Edit
      </Button>
      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <AddressForm
            id={id}
            street={street}
            city={city}
            state={state}
            zip={state}
            setEdit={setEdit}
          />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddressEdit;
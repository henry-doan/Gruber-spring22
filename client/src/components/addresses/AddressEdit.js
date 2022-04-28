import AddressForm from './AddressForm';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { LButton } from '../styles/Styles';

const AddressEdit = ({ id, street, city, state, zip }) => {
  const [editing, setEdit] = useState(false);
  
  return (
    <>
      <LButton onClick={() => setEdit(true)}>
        Edit
      </LButton>
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
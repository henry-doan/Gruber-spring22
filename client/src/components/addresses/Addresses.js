import AddressList from './AddressList';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddressForm from './AddressForm';

const Addresss = () => {
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
          <AddressForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Addresss</h1>
      <AddressList />
    </>
  )
}

export default Addresss;
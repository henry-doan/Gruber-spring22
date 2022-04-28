import AddressList from './AddressList';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddressForm from './AddressForm';
import { ConCon, LButton } from '../styles/Styles';

const Addresses = () => {
  const [adding, setAdd] = useState(false);

  return(
    <>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <ConCon>
      <LButton onClick={() => setAdd(true)}>
        Add Address
      </LButton>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <AddressForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Addresses</h1>
      <AddressList />
      </ConCon>
    </>
  )
}

export default Addresses;
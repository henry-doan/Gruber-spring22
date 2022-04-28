import AddressList from './AddressList';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddressForm from './AddressForm';
import { ConCon, LButton, ServCon, ServListCon, ServTextCon } from '../styles/Styles';
import { AuthConsumer } from '../../providers/AuthProvider';

const Addresses = (user) => {
  const [adding, setAdd] = useState(false);

  return(
    <>
  
    <ServCon>
      <ServListCon>
        {/* { user.role === 'Customer' ?
        <>
        
        <LButton onClick={() => setAdd(true)}>
          Add Address
        </LButton>
        <br></br>
        <br></br>
        <Modal show={adding} onHide={() => setAdd(false)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <AddressForm
              setAdd={setAdd}
            />
          </Modal.Body>
        </Modal>
        </>
          :
          null
        } */}
        <br></br>
        <br></br>
        <Modal show={adding} onHide={() => setAdd(false)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <AddressForm
              setAdd={setAdd}
            />
          </Modal.Body>
        </Modal>
        <ServTextCon>
          <h1>Address for Current Service</h1>
        <LButton onClick={() => setAdd(true)}>
          Add Address
        </LButton>
        </ServTextCon>
        <AddressList />
      </ServListCon>
      </ServCon>
    </>
  )
}

const ConnectedAddresses = (props) => (
  <AuthConsumer>
    { value => <Addresses {...value} {...props} />}
  </AuthConsumer>
)


export default ConnectedAddresses;
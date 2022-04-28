import ServiceList from './ServiceList';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ServiceForm from './ServiceForm';
import { ProfCon, LButton, ServCon, ServListCon, ServTextCon } from '../styles/Styles';

const Services = () => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <ServCon>
        <ServListCon>

      
          <ServTextCon>
            <h1>My Services</h1>
            <LButton onClick={() => setAdd(true)}>New Service</LButton>
          </ServTextCon>
          <Modal show={adding} onHide={() => setAdd(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <ServiceForm
              setAdd={setAdd}
              />
            </Modal.Body>
          </Modal>
              <ServiceList />
        </ServListCon>
      </ServCon>
    
    </>
  )
}

export default Services;
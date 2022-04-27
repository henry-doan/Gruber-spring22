import ServiceList from './ServiceList';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ServiceForm from './ServiceForm';
import { ProfCon, LButton } from '../styles/Styles';

const Services = () => {
  const [adding, setAdd] = useState(false)

  return (
    <>
    <ProfCon>

      <LButton onClick={() => setAdd(true)}>New Service</LButton>
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
    </ProfCon>
    </>
  )
}

export default Services;
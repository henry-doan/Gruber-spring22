import ServiceList from './ServiceList';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ServiceForm from './ServiceForm';

const Services = () => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <p onClick={() => setAdd(true)}>+</p>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <ServiceForm 
          setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      {/* <ServiceList /> */}
    </>
  )
}

export default Services;
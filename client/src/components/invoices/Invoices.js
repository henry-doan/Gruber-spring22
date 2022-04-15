import InvoiceList from './InvoiceList';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import InvoiceForm from './InvoiceForm';

const Invoices = () => {
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
          <InvoiceForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Invoices</h1>
      <InvoiceList />
    </>
  )
}

export default Invoices;
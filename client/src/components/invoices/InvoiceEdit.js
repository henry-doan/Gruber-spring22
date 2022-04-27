import InvoiceForm from './InvoiceForm';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { LButton } from '../styles/Styles';

const InvoiceEdit = ({ id, price, approve }) => {
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
          <InvoiceForm
            id={id}
            price={price}
            approve={approve}
            setEdit={setEdit}
          />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InvoiceEdit;
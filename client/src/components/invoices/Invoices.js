import InvoiceList from './InvoiceList';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import InvoiceForm from './InvoiceForm';
import {ServCon, ServListCon, ServTextCon, LButton} from '../styles/Styles'

const Invoices = () => {
  const [adding, setAdd] = useState(false);

  return(
    <>
      <ServCon>
        <ServListCon>
          <Modal show={adding} onHide={() => setAdd(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <InvoiceForm
                setAdd={setAdd}
              />
            </Modal.Body>
          </Modal>
          <ServTextCon>
            <h1>All Invoices</h1>
            <LButton onClick={() => setAdd(true)}>
              Add Invoice
            </LButton>
          </ServTextCon>
          <InvoiceList />
        </ServListCon>
      </ServCon>
    </>
  )
}

export default Invoices;
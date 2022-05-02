import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { InvoiceConsumer } from "../../providers/InvoiceProvider";
import { Row, Col, Modal, Button, Container } from 'react-bootstrap';
import Moment from 'react-moment';
import InvoiceEdit from "./InvoiceEdit";
import {InRow, LButton, ServTextCon} from '../styles/Styles';
import '../styles/App.css'

const InvoiceList = ({ invoices, getAllInvoices, deleteInvoice }) => {
  const { serviceId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllInvoices(serviceId)
  }, [])

  return (
    <>
  
      { invoices.map( i => 
      <Container>
        <Row>
          <Col>
            <p>TOTAL: ${i.price}</p>
          </Col>
         
          <Col>
            <LButton onClick={() => setShow(true)}>View Invoice</LButton>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <ServTextCon>
                  <h1>Invoice</h1>
                </ServTextCon>
                  
                  <ServTextCon>
                    <p>
                      TOTAL: ${i.price}
                    </p>
                  </ServTextCon>
                {/* <p>
                  approve: {i.approve}
                </p> */}
                
                {/* <p>
                  Image: {n.note_img}
                </p> */}
    
                <br>
                </br>

                <InvoiceEdit {...i} />
                <LButton onClick={() => {
                  deleteInvoice(serviceId, i.id)
                  setShow(false)
                }}>
                  Delete
                </LButton>
                <Link className="modal-link" to={`/invoices/${i.id}/confirmations`}>
                  Confirmation
                </Link>
              </Modal.Body>
            </Modal>
          </Col>
          <hr />
        </Row> 
        </Container>
      )}
    </>
  )
}

const ConnectedInvoiceList = (props) => (
  <InvoiceConsumer>
    { value => <InvoiceList {...props} {...value} />}
  </InvoiceConsumer>
)

export default ConnectedInvoiceList;
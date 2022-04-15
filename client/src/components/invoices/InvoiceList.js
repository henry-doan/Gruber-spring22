import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InvoiceConsumer } from "../../providers/InvoiceProvider";
import { Row, Col, Modal, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import InvoiceEdit from "./InvoiceEdit";

const InvoiceList = ({ invoices, getAllInvoices, deleteInvoice }) => {
  const { serviceId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllInvoices(serviceId)
  }, [])

  return (
    <>
      { invoices.map( i => 
        <Row>
          <Col>
            {i.price}
          </Col>
          {/* <Col>
            {n.body.substring(0, 20)}
          </Col> */}
          <Col>
            <Button onClick={() => setShow(true)}>+</Button>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <h1>Invoice</h1>
                
                <p>
                  price: {i.price}
                </p>
                <p>
                  approve: {i.approve}
                </p>
                
                {/* <p>
                  Image: {n.note_img}
                </p> */}
    
                <br>
                </br>

                <InvoiceEdit {...i} />
                <Button onClick={() => {
                  deleteInvoice(serviceId, i.id)
                  setShow(false)
                }}>
                  Delete
                </Button>
              </Modal.Body>
            </Modal>
          </Col>
          <hr />
        </Row> 
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
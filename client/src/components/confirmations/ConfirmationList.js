import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ConfirmationConsumer } from "../../providers/ConfirmationProvider";
import { Row, Col, Modal, Button, Container,  } from 'react-bootstrap';
import Moment from 'react-moment';
import ConfirmationEdit from "./ConfirmationEdit";
import { InRow, ConCon } from "../styles/Styles";

const ConfirmationList = ({ confirmations, getAllConfirmations, deleteConfirmation }) => {
  const { invoiceId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllConfirmations(invoiceId)
  }, [])

  return (
    <>
    <ConCon>
    <h1>Confirmations</h1>
    </ConCon>
      { confirmations.map( c => 
        
        <Container>
        
        <InRow>
          
          <Col>
            {/* {c.price} */}
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
                <h1>Confirmation</h1>
                
                <p>
                  workerid: {c.workerid}
                </p>
                <p>
                  <img src={c.conf_img} />
                  
                </p>
                
                {/* <p>
                  Image: {n.note_img}
                </p> */}
    
                <br>
                </br>

                <ConfirmationEdit {...c} />
                <Button onClick={() => {
                  deleteConfirmation(invoiceId, c.id)
                  setShow(false)
                }}>
                  Delete
                </Button>
                
                
              </Modal.Body>
            </Modal>
          </Col>
          <hr />
        </InRow> 
        </Container>
      )}
    </>
  )
}

const ConnectedConfirmationList = (props) => (
  <ConfirmationConsumer>
    { value => <ConfirmationList {...props} {...value} />}
  </ConfirmationConsumer>
)

export default ConnectedConfirmationList;
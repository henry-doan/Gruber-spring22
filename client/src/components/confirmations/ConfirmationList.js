import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ConfirmationConsumer } from "../../providers/ConfirmationProvider";
import { Row, Col, Modal, Button, Container, Image  } from 'react-bootstrap';
import Moment from 'react-moment';
import ConfirmationEdit from "./ConfirmationEdit";
import { InRow, ConCon, ServCardImg, LButton, ConfImg, ServTextCon, ImgModalCenter, ModalImg } from "../styles/Styles";

const ConfirmationList = ({ confirmations, getAllConfirmations, deleteConfirmation }) => {
  const { invoiceId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllConfirmations(invoiceId)
  }, [])

  return (
    <>
   
      { confirmations.map( c => 
        
        <Container>
        <Row>
          <Col>
            <p>Your Confirmation is Ready</p>
          </Col>
         
          <Col>
            
            <LButton onClick={() => setShow(true)}>View</LButton>
            
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <ServTextCon>
                  <h1>Confirmation</h1>
                  
                  <p>
                    Worker ID: #{c.workerid}
                  </p>
                </ServTextCon>
                
                <ImgModalCenter>
                  <ModalImg src={c.conf_img} width='25%'></ModalImg>
                </ImgModalCenter>
                  <br></br>
                  
                
                
                {/* <p>
                  Image: {n.note_img}
                </p> */}
    
                <br>
                </br>

                <ConfirmationEdit {...c} />
                <LButton onClick={() => {
                  deleteConfirmation(invoiceId, c.id)
                  setShow(false)
                }}>
                  Delete
                </LButton>
                
                
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

const ConnectedConfirmationList = (props) => (
  <ConfirmationConsumer>
    { value => <ConfirmationList {...props} {...value} />}
  </ConfirmationConsumer>
)

export default ConnectedConfirmationList;
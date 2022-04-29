import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddressConsumer } from "../../providers/AddressProvider";
import { Row, Col, Modal, Button, Container } from 'react-bootstrap';
import Moment from 'react-moment';
import AddressEdit from "./AddressEdit";
import { ConCon, AdRow, LButton, ServTextCon } from "../styles/Styles";
import "../styles/App.css"


const AddressList = ({ addresses, getAllAddresses, deleteAddress }) => {
  const { serviceId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllAddresses(serviceId)
  }, [])

  return (
    <>

    
      
      { addresses.map( a =>


        
        <Row>
          <Col>
            <p>{a.street} {a.city}, {a.state}</p>
          </Col>
          {/* <Col>
            {n.body.substring(0, 20)}
          </Col> */}
          <Col>
            <LButton onClick={() => setShow(true)}>View</LButton>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>

                <Container>
                  <Col>
                    <ServTextCon>
                      <h1>Address</h1>
                    </ServTextCon>
                  </Col>
                  
                  <ServTextCon>
                    <p>
                      {a.street}
                    </p>
                    <p>
                      {a.city}
                    </p>
                    <p>
                      {a.state}
                    </p>
                    <p>
                      {a.zip}
                    </p>
                  </ServTextCon>
                  {/* <p>
                    Image: {n.note_img}
                  </p> */}
                  <br>
                  </br>
                  <AddressEdit {...a} />
                  <LButton onClick={() => {
                    deleteAddress(serviceId, a.id)
                    setShow(false)
                  }}>
                    Delete
                  </LButton>
                </Container>
                </Modal.Body>
            </Modal>
          </Col>
          <hr />
        </Row> 
       
      )}
   
    </>
  )
}

const ConnectedAddressList = (props) => (
  <AddressConsumer>
    { value => <AddressList {...props} {...value} />}
  </AddressConsumer>
)

export default ConnectedAddressList;
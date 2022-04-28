import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddressConsumer } from "../../providers/AddressProvider";
import { Row, Col, Modal, Button, Container } from 'react-bootstrap';
import Moment from 'react-moment';
import AddressEdit from "./AddressEdit";
import { ConCon, AdRow, LButton } from "../styles/Styles";
import "../styles/App.css"


const AddressList = ({ addresses, getAllAddresses, deleteAddress }) => {
  const { serviceId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllAddresses(serviceId)
  }, [])

  return (
    <>
    <br>
    </br>
    <br>
    </br>
    <ConCon> 
      
      { addresses.map( a =>


        <div className="ad-div">
        <AdRow>
          <Col>
            {a.street}
          </Col>
          {/* <Col>
            {n.body.substring(0, 20)}
          </Col> */}
          <Col>
            <LButton onClick={() => setShow(true)}>Edit Address</LButton>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>

                <h1>Address</h1>
                
                <p>
                  street: {a.street}
                </p>
                <p>
                  city: {a.city}
                </p>
                <p>
                  state: {a.state}
                </p>
                <p>
                  zip: {a.zip}
                </p>
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
              </Modal.Body>
            </Modal>
          </Col>
          <hr />
        </AdRow> 
       </div>
      )}
     </ConCon>
    </>
  )
}

const ConnectedAddressList = (props) => (
  <AddressConsumer>
    { value => <AddressList {...props} {...value} />}
  </AddressConsumer>
)

export default ConnectedAddressList;
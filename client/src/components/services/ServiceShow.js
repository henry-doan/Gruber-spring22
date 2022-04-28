import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useReducer, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServiceConsumer } from '../../providers/ServiceProvider';
import Moment from 'react-moment';
import {LButton, ServCard, ServCardImg } from '../styles/Styles';
import '../styles/App.css';
import { AuthConsumer } from '../../providers/AuthProvider';

const ServiceShow = ({ id, lawn_size, service_type, frequency, sdate, stime, service_image, complete, deleteService, user, adminUpdateService}) => {
  const [show, setShow] = useState(false);

 const UpdateComplete = () => {
   const updatedService = { lawn_size, service_type, frequency, sdate, stime, service_image, complete: !complete }
    adminUpdateService(id, updatedService)
 }

  return (
    <>
       
      <ServCard style={{ width: '15rem', margin: '0 auto' }}>
        <ServCardImg variant="top" src={service_image} />
        <Card.Body>
          <Card.Title>
            {user.fname} {user.lname} {id}
            <br></br>
          
            </Card.Title>
            <h4>
              {/* Date: &nbsp; */}
              <Moment format="M/DD/YY">
                {sdate}
              </Moment> 
            </h4>
            <h6>Completed: {complete ? '✓' : '✘'}</h6>
          <LButton 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Details
          </LButton>
        </Card.Body>
      </ServCard>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row md={2}>
              <Col>
                <h2>You Next Scheduled Service</h2>
                <h4>Lawn Size: {lawn_size}</h4>
                
                {/* <h4>Service Type: {service_type}</h4>
                <h4>Frequency: {frequency}</h4> */}
                <p>
                  Date: &nbsp;
                  <Moment format="M/DD/YY">
                    {sdate}
                  </Moment> 
                </p>
                <p>
                  Time: &nbsp; 
                  <Moment format="h:mm a">
                    {stime}
                  </Moment> 
                </p>
                <h4>Completed: {complete ? '✓' : '✘'}</h4>
                {
                  user.role === 'Gruber' ? 
                  <LButton onClick={ () => UpdateComplete()}>{complete ? '✘' : '✓'}</LButton>
                  :
                  null
                }
                

                {
                  user.role === 'Customer' ? 
                  <Link
                    to={`/services/${id}/edit`}
                    state={{ id: id, lawn_size: lawn_size, service_type: service_type, frequency: frequency, sdate: sdate, stime: stime, complete: complete, service_image: service_image }}
                  >
                    <LButton>Edit</LButton>
                  </Link>
                  
                  :
                  null
                }
                {
                  user.role === 'Customer' ? 
                  <LButton
                  onClick={() => deleteService(id)}
                >
                  Delete
                </LButton>
                  :
                  null
                }
                
                
                <Link className='modal-link-2' to={`/services/${id}/notes`}>
                  Notes
                </Link>
                <Link className='modal-link-2' to={`/services/${id}/addresses`}>
                  Address
                </Link>
                <Link className='modal-link-2' to={`/services/${id}/invoices`}>
                  Invoice
                </Link>
                
              </Col>
              <Col>
                <img src={service_image} alt='service' width='100%' />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <br />
      <br />
    </>
  )
}

const ConnectedServiceShow = (props) => (
  <ServiceConsumer>
    { value => <ServiceShow {...value} {...props} />}
  </ServiceConsumer>
)

const ConnectedAuthServiceShow = (props) => (
  <AuthConsumer>
    { value => <ConnectedServiceShow {...value} {...props} />}
  </AuthConsumer>
)

export default ConnectedAuthServiceShow;
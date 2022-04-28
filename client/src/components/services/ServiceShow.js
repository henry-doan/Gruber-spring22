import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useReducer, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServiceConsumer } from '../../providers/ServiceProvider';
import Moment from 'react-moment';
import {LButton, ServCard, ServCardImg } from '../styles/Styles';
import '../styles/App.css';
import ConnectedServiceForm from './ServiceForm';
import Flash from '../shared/Flash';

const ServiceShow = ({ id, lawn_size, service_type, frequency, sdate, stime, service_image, complete, deleteService, flash, setFlash }) => {
  const [show, setShow] = useState(false);

  // useEffect( () => {

  //   // returned function will be called on component unmount 
  //   return () => {
  //     setFlash(null)
  //   }
  // }, [])

  return (
    <>
       {/* { flash ?
          <Flash
            variant={flash.variant}
            msg={flash.msg}
          />
        :
        null
      } */}
      <ServCard style={{ width: '15rem', margin: '0 auto' }}>
        <ServCardImg variant="top" src={service_image} />
        <Card.Body>
          <Card.Title>Lawn {id}</Card.Title>
          <LButton 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Show
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
                <h4>Lawn Size:{lawn_size}</h4>
                
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
                <h4>Complete: {complete}</h4>
                
                <Link
                  
                  to={`/services/${id}/edit`}
                  state={{ id: id, lawn_size: lawn_size, service_type: service_type, frequency: frequency, sdate: sdate, stime: stime, complete: complete, service_image: service_image }}
                >
                  <LButton>Edit</LButton>
                </Link>
                <LButton
                  onClick={() => deleteService(id)}
                >
                  Delete
                </LButton>
                
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

export default ConnectedServiceShow;
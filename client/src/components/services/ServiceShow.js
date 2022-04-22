import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceConsumer } from '../../providers/ServiceProvider';
import Moment from 'react-moment';

const ServiceShow = ({ id, lawn_size, service_type, frequency, sdate, stime, service_image, complete, deleteService }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card style={{ width: '15rem', margin: '0 auto' }}>
        <Card.Img variant="top" src={service_image} />
        <Card.Body>
          <Card.Title>Lawn {id}</Card.Title>
          <Button 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Show
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row md={2}>
              <Col>
                <h1>Lawn Size:{lawn_size}</h1>
                <h4>Service Type: {service_type}</h4>
                <h4>Frequency: {frequency}</h4>
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
                <h4>Price: </h4>
                <Link 
                  to={`/services/${id}/edit`}
                  state={{ id: id, lawn_size: lawn_size, service_type: service_type, frequency: frequency, sdate: sdate, stime: stime, complete: complete, service_image: service_image }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteService(id)}
                >
                  Delete
                </Button>
                <Link to={`/services/${id}/notes`}>
                  Notes
                </Link>
                <Link to={`/services/${id}/addresses`}>
                  Address
                </Link>
                <Link to={`/services/${id}/invoices`}>
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
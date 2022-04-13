import { Form, Button, Row, Col } from 'react-bootstrap';
import { ServiceConsumer } from '../../providers/ServiceProvider';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ServiceForm = ({ addService, setAdd, updateService }) => {
  const [service, setService] = useState({ lawn_size: '', service_type: '', frequency: '', sdate: '', stime: '', service_image: '', complete: false })

  const location = useLocation()
  const { serviceId } = useParams()
  
  useEffect( () => {
    if (serviceId) {
      const { lawn_size, service_type, frequency, sdate, stime, service_image, complete } = location.state
      setService({ lawn_size, service_type, frequency, sdate, stime, service_image, complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (serviceId) {
      updateService(serviceId, service)
    } else {
      addService(service)
      setAdd(false)
    }
    setService({ lawn_size: '', service_type: '', frequency: '', sdate: '', stime: '', service_image: '', complete: false })
  }

  return (
    <>
      <h1>{ serviceId ? 'Update' : 'Create' } Service</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Lawn Size</Form.Label>
              <Form.Control 
                name='lawn_size'
                value={service.lawn_size}
                onChange={(e) => setService({...service, lawn_size: e.target.value })}
                type="text" 
                placeholder="Lawn Size" 
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Service Type</Form.Label>
              <Form.Control 
                name='service_type'
                value={service.service_type}
                onChange={(e) => setService({...service, service_type: e.target.value })}
                type="text" 
                placeholder="Service Type" 
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Frequency</Form.Label>
              <Form.Control 
                name='frequency'
                value={service.frequency}
                onChange={(e) => setService({...service, frequency: e.target.value })}
                type="text" 
                placeholder="Frequency" 
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control 
                name='sdate'
                value={service.sdate}
                onChange={(e) => setService({...service, sdate: e.target.value })}
                type="date" 
                placeholder="Date" 
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control 
                name='stime'
                value={service.stime}
                onChange={(e) => setService({...service, stime: e.target.value })}
                type="time" 
                placeholder="Time" 
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Service Image</Form.Label>
              <Form.Control 
                name='service_image'
                value={service.service_image}
                onChange={(e) => setService({...service, service_image: e.target.value })}
                type="text" 
                placeholder="Service Image" 
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Complete</Form.Label>
              <Form.Check 
                name='complete'
                // value={service.complete}
                checked={service.complete}
                onChange={(e) => setService({...service, complete: !service.complete })}
                type="checkbox" 
                placeholder="Complete" 
                required
                disabled
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedServiceForm = (props) => (
  <ServiceConsumer>
    { value => <ServiceForm {...value} {...props} /> }
  </ServiceConsumer>
)

export default ConnectedServiceForm;
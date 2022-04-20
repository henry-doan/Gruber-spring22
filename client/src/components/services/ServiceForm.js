import { Form, Button, Row, Col, Image, Container } from 'react-bootstrap';
import { ServiceConsumer } from '../../providers/ServiceProvider';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const ServiceForm = ({ addService, setAdd, updateService }) => {
  const [service, setService] = useState({ lawn_size: '', service_type: '', frequency: '', sdate: '', stime: '', service_image: null, complete: false })
  
  const [file, setFile] = useState()

  const location = useLocation()
  const { serviceId } = useParams()
  
  useEffect( () => {
    if (serviceId) {
      const { lawn_size, service_type, frequency, sdate, stime, service_image, complete } = location.state
      setService({ lawn_size, service_type, frequency, sdate, stime, service_image, complete })
    }
  }, [])

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setService({ ...service, service_image: fileItems[0].file });
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setService({ ...service, service_image: null });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (serviceId) {
      updateService(serviceId, service)
    } else {
      addService(service)
      setAdd(false)
    }
    setService({...service, image: null})
    // ({ lawn_size: '', service_type: '', frequency: '', sdate: '', stime: '', service_image: null, complete: false })
  }

  return (
    <>
      <h1>{ serviceId ? 'Update' : 'Create' } Service</h1>
      <Form onSubmit={handleSubmit}>

        <Col md="4">
          <FilePond 
              files={file}
              onupdatefiles={handleFileUpdate}
              onremovefile={handleFileRemoved}
              allowMultiple={true}
              name='service_image'
              labelIdle='Drag and Drop your files or <span className="filePond--label-action">
                Browse
                </span>  
              '
          />
        </Col>

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
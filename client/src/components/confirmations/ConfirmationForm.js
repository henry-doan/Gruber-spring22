import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ConfirmationConsumer } from '../../providers/ConfirmationProvider';
import { useParams } from 'react-router-dom';

const ConfirmationForm = ({ setAdd, addConfirmation, id, workerid, conf_img, setEdit, updateConfirmation}) => {
  const [confirm, setConfirm] = useState({ workerid: 0, conf_img: ''})

  const { invoiceId } = useParams()

  useEffect( () => {
    if (id) {
      setConfirm({ workerid, conf_img})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateConfirmation(invoiceId, id, confirm)
      setEdit(false)
    } else {
      addConfirmation(invoiceId, confirm)
      setAdd(false)
    }
    setConfirm({ workerid: 0, conf_img: ''})
  }

  return(
    <>
      <h1>{id ? 'Update' : 'Create'} Confirm</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>{id}</Form.Label>
          <Form.Control 
            type="text"
            name='confirmation'
            value={confirm.workerid}
            onChange={(e) => setConfirm({...confirm, workerid: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>image</Form.Label>
          <Form.Control 
            type="text"
            name='conf_img'
            value={confirm.conf_img}
            onChange={(e) => setConfirm({...confirm, conf_img: e.target.value})}
            required
          />
        </Form.Group>
        
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedConfirmationForm = (props) => (
  <ConfirmationConsumer>
    { value => <ConfirmationForm {...props} {...value} />}
  </ConfirmationConsumer>
)

export default ConnectedConfirmationForm;
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AddressConsumer } from '../../providers/AddressProvider';
import { useParams } from 'react-router-dom';
import "../styles/App.css"
import { LButton, ServTextCon } from '../styles/Styles';

const AddressForm = ({ setAdd, addAddress, id, street, city, state, zip, setEdit, updateAddress}) => {
  const [address, setAddress] = useState({ street: '', city: '', state: '', zip: ''})

  const { serviceId } = useParams()

  useEffect( () => {
    if (id) {
      setAddress({ street, city, state, zip })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAddress(serviceId, id, address)
      setEdit(false)
    } else {
      addAddress(serviceId, address)
      setAdd(false)
    }
    setAddress({ street: '', city: '', state: '', zip: '' })
  }

  return(
    <>
    <div className='ad-div'>
      <ServTextCon>
        <h1>{id ? 'Update' : 'Create'} Address</h1>
      </ServTextCon>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Street</Form.Label>
          <Form.Control 
            type="text"
            name='street'
            value={address.street}
            onChange={(e) => setAddress({...address, street: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="text"
            name='city'
            value={address.city}
            onChange={(e) => setAddress({...address, city: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>State</Form.Label>
          <Form.Control 
            type="text"
            name='state'
            value={address.state}
            onChange={(e) => setAddress({...address, state: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
            type="text"
            name='zip'
            value={address.zip}
            onChange={(e) => setAddress({...address, zip: e.target.value})}
            required
          />
        </Form.Group>
       
        <LButton variant="primary" type="submit">
          Submit
        </LButton>
      </Form>
      </div>
    </>
  )
}

const ConnectedAddressForm = (props) => (
  <AddressConsumer>
    { value => <AddressForm {...props} {...value} />}
  </AddressConsumer>
)

export default ConnectedAddressForm;
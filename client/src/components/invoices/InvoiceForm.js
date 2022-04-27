import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { InvoiceConsumer } from '../../providers/InvoiceProvider';
import { useParams } from 'react-router-dom';
import { LButton } from '../styles/Styles';

const InvoiceForm = ({ setAdd, addInvoice, id, price, approve, setEdit, updateInvoice}) => {
  const [invoice, setInvoice] = useState({ price: '', approve: false })

  const { serviceId } = useParams()

  useEffect( () => {
    if (id) {
      setInvoice({ price, approve })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateInvoice(serviceId, id, invoice)
      setEdit(false)
    } else {
      addInvoice(serviceId, invoice)
      setAdd(false)
    }
    setInvoice({ price: '', approve: false })
  }

  return(
    <>
      <h1>{id ? 'Update' : 'Create'} Invoice</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>price</Form.Label>
          <Form.Control 
            type="text"
            name='price'
            value={invoice.price}
            onChange={(e) => setInvoice({...invoice, price: e.target.value})}
            required
          />
        </Form.Group>
        {/* <Col> */}
            <Form.Group className="mb-3">
              <Form.Label>Approve</Form.Label>
              <Form.Check 
                name='complete'
                // value={service.complete}
                checked={invoice.approve}
                onChange={(e) => setInvoice({...invoice, approve: !invoice.approve })}
                type="checkbox" 
                placeholder="Invoice" 
                required
                // disabled
              />
            </Form.Group>
          {/* </Col> */}
        
       
        <LButton variant="primary" type="submit">
          Submit
        </LButton>
      </Form>
    </>
  )
}

const ConnectedInvoiceForm = (props) => (
  <InvoiceConsumer>
    { value => <InvoiceForm {...props} {...value} />}
  </InvoiceConsumer>
)

export default ConnectedInvoiceForm;
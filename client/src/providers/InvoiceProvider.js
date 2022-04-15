import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const InvoiceContext = React.createContext();

export const InvoiceConsumer = InvoiceContext.Consumer;

const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([])

  const navigate = useNavigate()

  const getAllInvoices = (serviceId) => {
    axios.get(`/api/services/${serviceId}/invoices`)
      .then( res => setInvoices(res.data) )
      .catch( err => console.log(err) )
  }

  const addInvoice = (serviceId, invoice) => {
    axios.post(`/api/services/${serviceId}/invoices`, { invoice })
    .then( res => setInvoices([...invoices, res.data]) )
    .catch( err => console.log(err) )
  }

  const updateInvoice = (serviceId, id, invoice) => {
    axios.put(`/api/services/${serviceId}/invoices/${id}`, { invoice })
      .then( res => {
        const newUpdatedInvoices = invoices.map( i => {
          if (i.id === id) {
            return res.data
          }
          return i
        })
        setInvoices(newUpdatedInvoices)
        navigate(`/services/${serviceId}/invoices`)
      })
      .catch( err => console.log(err) )
  }

  const deleteInvoice = (serviceId, id) => {
    axios.delete(`/api/services/${serviceId}/invoices/${id}`)
      .then( res => {
        setInvoices(invoices.filter(s => s.id !== id))
      })
      .catch( err => console.log(err) )
  }

  return (
    <InvoiceContext.Provider value={{
      invoices,
      getAllInvoices, 
      addInvoice,
      updateInvoice,
      deleteInvoice,
    }}>
      { children }
    </InvoiceContext.Provider>
  )
}

export default InvoiceProvider;
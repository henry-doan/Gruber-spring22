import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ConfirmationContext = React.createContext();

export const ConfirmationConsumer = ConfirmationContext.Consumer;

const ConfirmationProvider = ({ children }) => {
  const [confirmations, setConfirmations] = useState([])

  const navigate = useNavigate()

  const getAllConfirmations = (invoiceId) => {
    axios.get(`/api/invoices/${invoiceId}/confirmations`)
      .then( res => setConfirmations(res.data) )
      .catch( err => console.log(err) )
  }

  const addConfirmation = (invoiceId, NewConfirmation) => {
    let confirmation = new FormData()
    confirmation.append('conf_img', NewConfirmation.conf_img )
    confirmation.append('workerid', NewConfirmation.workerid )
    axios.post(`/api/invoices/${invoiceId}/confirmations`,  confirmation )
    .then( res => setConfirmations([...confirmations, res.data]) )
    .catch( err => console.log(err) )
  }

  const updateConfirmation = (invoiceId, id, NewConfirmation) => {
    let confirmation = new FormData()
    confirmation.append('conf_img', NewConfirmation.conf_img )
    confirmation.append('workerid', NewConfirmation.workerid )
    axios.put(`/api/invoices/${invoiceId}/confirmations/${id}`,  confirmation )
      .then( res => {
        const newUpdatedConfirmations = confirmations.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setConfirmations(newUpdatedConfirmations)
        navigate(`/invoices/${invoiceId}/confirmations`)
      })
      .catch( err => console.log(err) )
  }

  const deleteConfirmation = (invoiceId, id) => {
    axios.delete(`/api/invoices/${invoiceId}/confirmations/${id}`)
      .then( res => {
        setConfirmations(confirmations.filter(i => i.id !== id))
      })
      .catch( err => console.log(err) )
  }

  return (
    <ConfirmationContext.Provider value={{
      confirmations,
      getAllConfirmations, 
      addConfirmation,
      updateConfirmation,
      deleteConfirmation,
    }}>
      { children }
    </ConfirmationContext.Provider>
  )
}

export default ConfirmationProvider;
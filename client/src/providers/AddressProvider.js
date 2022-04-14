import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AddressContext = React.createContext();

export const AddressConsumer = AddressContext.Consumer;

const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([])

  const navigate = useNavigate()

  const getAllAddresses = (serviceId) => {
    axios.get(`/api/services/${serviceId}/addresses`)
      .then( res => setAddresses(res.data) )
      .catch( err => console.log(err) )
  }

  const addAddress = (serviceId, address) => {
    axios.post(`/api/services/${serviceId}/addresses`, { address })
    .then( res => setAddresses([...addresses, res.data]) )
    .catch( err => console.log(err) )
  }

  const updateAddress = (serviceId, id, address) => {
    axios.put(`/api/services/${serviceId}/addresses/${id}`, { address })
      .then( res => {
        const newUpdatedAddresses = addresses.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a
        })
        setAddresses(newUpdatedAddresses)
        navigate(`/services/${serviceId}/addresses`)
      })
      .catch( err => console.log(err) )
  }

  const deleteAddress = (serviceId, id) => {
    axios.delete(`/api/services/${serviceId}/addresses/${id}`)
      .then( res => {
        setAddresses(addresses.filter(s => s.id !== id))
      })
      .catch( err => console.log(err) )
  }

  return (
    <AddressContext.Provider value={{
      addresses,
      getAllAddresses, 
      addAddress,
      updateAddress,
      deleteAddress,
    }}>
      { children }
    </AddressContext.Provider>
  )
}

export default AddressProvider;
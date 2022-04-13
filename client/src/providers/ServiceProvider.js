import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export const ServiceContext = React.createContext();

export const ServiceConsumer = ServiceContext.Consumer;

const ServiceProvider = ({ children, user }) => {
  const [services, setServices] = useState([])

  const navigate = useNavigate()

  const getAllServices = () => {
    axios.get(`/api/users/${user.id}/services`)
      .then( res => setServices(res.data) )
      .catch( err => console.log(err))
  }

  const addService = (service) => {
    axios.post(`/api/users/${user.id}/services`, { service })
      .then( res => setServices([...services, res.data]) )
      .catch( err => console.log(err))
  }

  const updateService = (id, service) => {
    axios.put(`/api/users/${user.id}/services/${id}`, { service })
      .then( res => {
        const newUpdatedServices = services.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setServices(newUpdatedServices)
        navigate('/services')
      })
      .catch( err => console.log(err))
  }

  const deleteService = (id) => {
    axios.delete(`/api/users/${user.id}/services/${id}`)
      .then( res => {
        setServices(services.filter( s => s.id !== id))
        navigate('/services')
      })
      .catch( err => console.log(err))
  }


  return (
    <ServiceContext.Provider value={{
      services,
      getAllServices,
      addService,
      updateService,
      deleteService,
    }}>
      { children }
    </ServiceContext.Provider>
  )
}

const ConnectedServiceProvider = (props) => (
  <AuthConsumer>
    { value => <ServiceProvider {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedServiceProvider;
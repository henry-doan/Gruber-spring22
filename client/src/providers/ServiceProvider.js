import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';
import { InvoiceConsumer } from './InvoiceProvider';
import { NoteConsumer } from './NoteProvider';

export const ServiceContext = React.createContext();

export const ServiceConsumer = ServiceContext.Consumer;

const ServiceProvider = ({ user, addInvoice, addNote, children }) => {
  const [services, setServices] = useState([])

  const navigate = useNavigate()

  const getAllServices = () => {
    axios.get(`/api/users/${user.id}/services`)
      .then( res => setServices(res.data) )
      .catch( err => console.log(err))
  }

  const addService = (NewService, note, invoice) => {
    let service = new FormData()
    service.append('service_image', NewService.service_image)
    service.append('lawn_size', NewService.lawn_size)
    service.append('service_type', NewService.service_type)
    service.append('frequency', NewService.frequency)
    service.append('sdate', NewService.sdate)
    service.append('stime', NewService.stime)
    service.append('complete', NewService.complete)

    axios.post(`/api/users/${user.id}/services`,  service )
      .then( res => {

        addInvoice(res.data.id, invoice)
        addNote(res.data.id, note)
        setServices([...services, res.data]) 
        navigate('/services')
      })
      .catch( err => console.log(err))
  }


  const updateService = (id, NewService) => {
    let service = new FormData()
    service.append('service_image', NewService.service_image)
    service.append('lawn_size', NewService.lawn_size)
    service.append('service_type', NewService.service_type)
    service.append('frequency', NewService.frequency)
    service.append('sdate', NewService.sdate)
    service.append('stime', NewService.stime)
    service.append('complete', NewService.complete)

    axios.put(`/api/users/${user.id}/services/${id}`,  service )
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

const ConnectedInvoiceService = (props) => (
  <InvoiceConsumer>
    { value => <ConnectedServiceProvider {...value} {...props} />}
  </InvoiceConsumer>
)

const ConnectedNoteService = (props) => (
  <NoteConsumer>
    { value => <ConnectedInvoiceService {...value} {...props} />}
  </NoteConsumer>
)

export default ConnectedNoteService;
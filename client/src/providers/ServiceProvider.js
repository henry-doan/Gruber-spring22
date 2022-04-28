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
  const [pagination, setPagination] = useState(1)
  const [headers, setHeaders] = useState({})
  const [flash, setFlash] = useState(null)

  const navigate = useNavigate()

  const getAllServices = (page = 1) => {
    if (user.role === 'Gruber') {
      axios.get(`/api/allservices?page=${page}`)
      .then( res => {
        const { headers, data } = res
        const totalPages = Math.ceil(headers['x-total'] / headers['x-per-page']);
        setServices(data) 
        setPagination(totalPages)
        setHeaders(headers)
      })
      .catch( err => {
        console.log(err)
        setFlash({ variant: 'danger', msg: err.response.data.errors[0] })
      });
    } else {
      axios.get(`/api/users/${user.id}/services?page=${page}`)
      .then( res => {
        const { headers, data } = res
        const totalPages = Math.ceil(headers['x-total'] / headers['x-per-page']);
        setServices(data) 
        setPagination(totalPages)
        setHeaders(headers)
      })
      .catch( err => {
        console.log(err)
        setFlash({ variant: 'danger', msg: err.response.data.errors[0] })
      });
    }
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
        const { data, headers } = res
        addInvoice(data.id, invoice)
        addNote(data.id, note)
        setServices([...services, data]) 
        setHeaders(headers)
        setFlash({ variant: 'success', msg: 'Service Created!' })
        navigate('/submission')
      })
      .catch( err => {       
        console.log(err)
        setFlash({ variant: 'danger', msg: 'field ' + err.response.data.errors.name[0] })
      });
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
        const { data, headers } = res;
        const newUpdatedServices = services.map( s => {
          if (s.id === id) {
            return data
          }
          return s
        })
        setServices(newUpdatedServices)
        setHeaders(headers)
        setFlash({ variant: 'success', msg: 'Service Edited!' })
        navigate('/services')
      })
      .catch( err => {
        console.log(err)
        setFlash({ variant: 'danger', msg: err.response.data.errors[0] })
      }); 
  }

  const deleteService = (id) => {
    axios.delete(`/api/users/${user.id}/services/${id}`)
      .then( res => {
        const { data, headers } = res
        setServices(services.filter( s => s.id !== id))
        setHeaders(headers)
        setFlash({ variant: 'success', msg: 'Service Deleted!' })
        navigate('/services')
      })
      .catch( err => {
        console.log(err)
        setFlash({ variant: 'danger', msg: err.response.data.errors[0] })
      })
  }

  const adminUpdateService = (id, service) => {
    axios.put(`/api/services/${id}/adminUpdateService`,  {service} )
    .then( res => {
      const { data, headers } = res;
      const newUpdatedServices = services.map( s => {
        if (s.id === id) {
          return data
        }
        return s
      })
      setServices(newUpdatedServices)
      setHeaders(headers)
      setFlash({ variant: 'success', msg: 'Service Edited!' })
      navigate('/services')
    })
    .catch( err => {
      console.log(err)
      setFlash({ variant: 'danger', msg: err.response.data.errors[0] })
    }); 
  }


  return (
    <ServiceContext.Provider value={{
      services,
      pagination,
      headers,
      flash,
      setFlash,
      getAllServices,
      addService,
      updateService,
      deleteService,
      adminUpdateService,
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
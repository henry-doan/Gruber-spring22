import { Container, Row, Col, Pagination } from 'react-bootstrap';
import ServiceShow from './ServiceShow';
import { ServiceConsumer } from '../../providers/ServiceProvider';
import { useEffect, useReducer, useState } from 'react';
import {ServCon, ServRow, ServCol, SPagination} from '../styles/Styles';
import Flash from '../shared/Flash';
import '../styles/App.css'



const ServiceList = ({ services, getAllServices, pagination, flash, setFlash }) => {
  const [pages, setPages] = useState([])
  
  useEffect( () => {
    getAllServices()
    renderPages()

     // returned function will be called on component unmount 
     return () => {
      setFlash(null)
    }
  }, [])

  const renderPages = () => {
    let items = []
    for (let num = 1; num <= pagination; num++) {
      items.push(
        <Pagination.Item key={num} onClick={() => getAllServices(num)} className='pag'>
          {num}
        </Pagination.Item>
      )
    }
    setPages(items)
  }
  

  return ( 
    <>
    
      { flash ?
          <Flash
            variant={flash.variant}
            msg={flash.msg}
          />
        :
        null
      }
        <ServRow md={4} sm={12}>
          { services.map( s => 
            <ServCol>
                <ServiceShow 
                  key={s.id}
                  {...s}
                  
                  /> 
            </ServCol>
          )}
        </ServRow>
        <Pagination>{pages}</Pagination>


    
    </>
  )
}

const ConnectedServiceList = (props) => (
  <ServiceConsumer>
    { value => <ServiceList {...value} {...props} /> }
  </ServiceConsumer>
)

export default ConnectedServiceList;
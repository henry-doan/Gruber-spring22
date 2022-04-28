import { Container, Row, Col, Pagination } from 'react-bootstrap';
import ServiceShow from './ServiceShow';
import { ServiceConsumer } from '../../providers/ServiceProvider';
import { useEffect, useState } from 'react';
import {ServCon, ServRow, ServCol} from '../styles/Styles';
import Flash from '../shared/Flash';



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
        <Pagination.Item key={num} onClick={() => getAllServices(num)}>
          {num}
        </Pagination.Item>
      )
    }
    setPages(items)
  }
  

  return ( 
    <>
      <h1>My Services</h1>
      <ServCon>
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


      </ServCon>
    </>
  )
}

const ConnectedServiceList = (props) => (
  <ServiceConsumer>
    { value => <ServiceList {...value} {...props} /> }
  </ServiceConsumer>
)

export default ConnectedServiceList;
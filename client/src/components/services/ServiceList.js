import { Container, Row, Col } from 'react-bootstrap';
import ServiceShow from './ServiceShow';
import { ServiceConsumer } from '../../providers/ServiceProvider';
import { useEffect } from 'react';
import {ServCon} from '../styles/Styles';


const ServiceList = ({ services, getAllServices }) => {
  
  useEffect( () => {
    getAllServices()
  }, [])

  return ( 
    <>
      <h1>My Services</h1>
      <ServCon>
        <Row md={4} sm={12}>
          { services.map( s => 
            <Col>
                <ServiceShow 
                  key={s.id}
                  {...s}
                />  
            </Col>
          )}
        </Row>
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
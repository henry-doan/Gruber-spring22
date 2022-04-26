import { AuthConsumer } from '../../providers/AuthProvider';
import { Col, Row, Container } from "react-bootstrap";
import ServiceForm from '../../components/services/ServiceForm';
import {imgCol} from '../styles/Styles'

const StepTwo = ({user}) => {

return(
<>

      <Row>
      <Col>
    <img className='sImg' src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" width="250px"></img>
    </Col>
      <Col>
      <div className='s-prof'>
      <h1>Is This You?</h1>
      
     
      
      
        <h1>Email: {user.email}</h1>
        <h1>Full Name: {user.fname} {user.lname}</h1>
        <h1>Phone: {user.phone}</h1>
        <h1>Role: {user.role}</h1>
      </div>
    
  
      </Col>
        </Row>
      
      <ServiceForm />
      
      
    
  </>   
     
)
}

const ConnectedStepTwo = (props) => (
  <AuthConsumer>
    { value => <StepTwo {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedStepTwo;










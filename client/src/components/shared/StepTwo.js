import { AuthConsumer } from '../../providers/AuthProvider';
import { Col, Row, Container } from "react-bootstrap";
import ServiceForm from '../../components/services/ServiceForm';
import {imgCol} from '../styles/Styles'
import bt from '../styles/images/BoyToy.png'

const StepTwo = ({user}) => {

return(
<>
<br>
</br>
<br>
</br>

      <Row>
      <Col>
    <img className='sImg' src={bt} width="350px"></img>
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










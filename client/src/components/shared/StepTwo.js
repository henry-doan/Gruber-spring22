import { AuthConsumer } from '../../providers/AuthProvider';
import { Col, Row, Container } from "react-bootstrap";
import ServiceForm from '../../components/services/ServiceForm';
import {imgCol, ServCon, BigFormListCon, ServTextCon} from '../styles/Styles'
import bt from '../styles/images/BoyToy.png'

const StepTwo = ({user}) => {

return(
<>

      <ServCon>
        <BigFormListCon>
          <br></br>
          <br></br>
          <ServTextCon>
            <h1>Is This You?</h1>
          </ServTextCon>
          
          <Row>
          <Col>
          <br/>
          <br/>
          <br/>
              <img className='sImg' src={bt} width="350px"></img>
              </Col>
          <Col>
          <div className='s-prof'>
          
            
          <p>Email:</p>
          <h1>{user.email}</h1>
          <p>Full Name:</p>
          <h1>{user.fname} {user.lname}</h1>
          <p>Phone:</p>
          <h1>{user.phone}</h1>
          <p>Role:</p>
          <h1>{user.role}</h1>
          </div>
          </Col>
            </Row>
        
          <ServiceForm />
        </BigFormListCon>
      </ServCon>
      
      
    
  </>   
     
)
}

const ConnectedStepTwo = (props) => (
  <AuthConsumer>
    { value => <StepTwo {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedStepTwo;










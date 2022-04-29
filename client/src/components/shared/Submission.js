import { Row, Container, Card, Col } from 'react-bootstrap';
import { SubCon, SubCol, LButton } from '../styles/Styles';
import {Link} from 'react-router-dom';

const Submission = () => (

<>
<SubCon>
  
    <SubCol>
      <h1>Almost There!</h1>
      <h2>Please Submit your address in your service details</h2>
      
      <p>Then you will recieve bids from your local Gruber Service Providers shortly after!</p>
  

      <Link to='/services'>
        <LButton>
          View Service
        </LButton>
      </Link>

   
    </SubCol>

</SubCon>




</>


)

export default Submission;
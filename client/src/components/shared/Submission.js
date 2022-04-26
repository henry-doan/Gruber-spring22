import { Row, Container, Card, Col } from 'react-bootstrap';
import { SubCon, SubCol, LButton } from '../styles/Styles';
import {Link} from 'react-router-dom';

const Submission = () => (

<>
<SubCon>
  
    <SubCol>
      <h1> Thanks For Your Request!</h1>
      <p>You will recieve bids from your local Gruber Service Providers Soon!</p>
  

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
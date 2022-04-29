import { Button, Col, Row, Container } from "react-bootstrap";
import { SBSRow, SBSh3, SBSContainer, SBSh4, SBSimg, SBSButton } from "../styles/Styles";
import { Link } from 'react-router-dom'


 


const StepByStep = () => (
  <>
  <SBSContainer>
    <SBSRow>
  <SBSh3>STEP BY STEP PROCESS OF GRUBER</SBSh3>
    </SBSRow>
  <SBSRow>
    <Col>
  <SBSimg src='https://images.unsplash.com/photo-1558864255-eced94afc9ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'></SBSimg>
  </Col>
    <Col>
    <SBSh4> Take Photo of Lawn </SBSh4>
    </Col>
  </SBSRow>
  <SBSRow>
  <Col>
  <SBSimg src='https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80' ></SBSimg>
  </Col>
   <Col>
  <SBSh4> Pick a Service </SBSh4>
  </Col>
  </SBSRow>
  <SBSRow>
    <Col>
  <SBSimg src='https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' ></SBSimg>
  </Col>
    <Col>
  <SBSh4> Accept Bid </SBSh4>
  </Col>
  </SBSRow>
  
  
  <SBSRow>
    
  <Link to='/register'>
    <SBSButton>Next</SBSButton>
  </Link>
  </SBSRow>
  </SBSContainer>
  </>


)




export default StepByStep;
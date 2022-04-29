
import { Link } from 'react-router-dom';
import { Row, Container, Button, Col} from "react-bootstrap";
import "../styles/App.css"
import { LButton, RCol, MCol, MainFooter } from '../styles/Styles';

const Footer = () => {
  return(
    // <div className="main-footer">
      
        <>
        <MainFooter>
          <Row>
            <Col>
            <p>
              &copy;{new Date().getFullYear()} Powered by Devpoint Studios LLC | Get Started | Privacy Policy
            </p>
            </Col>
            <MCol>
            <p>Get Your Lawn Mowed Now!</p>
            </MCol>
            <RCol>
            <Link to='/stepbystep'>
            
                <LButton>Sign Up</LButton>
              </Link>
            </RCol>
          </Row>
        </MainFooter>
        </>
    
  )

}

export default Footer

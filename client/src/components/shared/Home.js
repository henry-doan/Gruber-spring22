import { MainHeader, MainHeaderText, SubHeader, NavCon, GrubCon, LButton, HomeImg, MainLogin} from '../styles/Styles';
import {Row, Nav, Button, Col, Container, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logogw2 from "../styles/images/logogw2.png";
import "../styles/App.css"


const Home = () => (
  <>
    <MainHeader>

           
        <Row>
          <Col>
        
                  <HomeImg src={logogw2} alt='gruber logo'></HomeImg>
            <MainHeaderText>
              
              
      
         
              <h1>The Uber for Lawn Care.</h1>
              <h1>Simple. Easy. Fast.</h1>
          
          
          
            <Nav.Link>
                <Link to='/stepbystep'>
                  <LButton>
                    Get your lawn care today!
                  </LButton>
                </Link>
              </Nav.Link>
          
            </MainHeaderText>
          </Col>
        </Row>
 
    </MainHeader>
  </>
)

export default Home;
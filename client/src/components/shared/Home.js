import { MainHeader, MainHeaderText, SubHeader, NavCon, GrubCon, LButton} from '../styles/Styles';
import {Row, Nav, Button, Col, Container, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => (
  <>
    <MainHeader>
     
        
          
            
          
            
            
        <MainHeaderText>
          <h4>Logo</h4>
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
        
        
        
        
        
        
      
    
    </MainHeader>
  </>
)

export default Home;
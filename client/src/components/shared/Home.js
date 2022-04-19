import { MainHeader, MainHeaderText, SubHeader} from '../styles/Styles';
import {Row, Nav, Button, Col, Container, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <MainHeader>
      <Row>
        <Container>
        <MainHeaderText>
          <h1>Gruber</h1>
          <p>Movement is what we power. It’s our lifeblood. It runs 
            through our veins. It’s what gets us out of bed each 
            morning. It pushes us to constantly reimagine how we can 
            move better. For you. For all the places you want to go. 
            For all the things you want to get. For all the ways you 
            want to earn. Across the entire world. In real time. At the 
            incredible speed of now.</p>
        </MainHeaderText>
        </Container>
          <Nav.Link>
            <Link to='/login'>
              <Button>
                Log In
                </Button>
            </Link>
          {/* </Nav.Link>
          <Nav.Link> */}
            <Link to='/register'>
              <Button>
                Get Started
              </Button>
            </Link>
          </Nav.Link>
        
      </Row>
    
    </MainHeader>
  </>
)

export default Home;
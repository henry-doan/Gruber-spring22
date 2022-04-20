import { MainHeader, MainHeaderText, SubHeader, NavCon, GrubCon} from '../styles/Styles';
import {Row, Nav, Button, Col, Container, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <MainHeader>
      <Row>
        <Container>
          <Row>
            <h4>Logo</h4>
          </Row>
          <Row>
            <Col>
            <GrubCon>
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
        </GrubCon>
        <Nav.Link>
            <Link to='/login'>
              <Button>
                Log In
                </Button>
            </Link>
          {/* </Nav.Link>
          <Nav.Link> */}
            <Link to='/stepbystep'>
              <Button>
                Get Started
              </Button>
            </Link>
          </Nav.Link>
        </Col>
        <Col>
        <img src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=716&q=80" width= '350px'>

        </img>
        </Col>
        </Row>
        </Container>
        
        
      </Row>
    
    </MainHeader>
  </>
)

export default Home;
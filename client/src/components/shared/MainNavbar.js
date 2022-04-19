import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import StepByStep from "./StepByStep";

const MainNavbar = ({user, handleLogout }) => {
  
  const rightNavItem = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
          <Nav.Link>
            <Link to='/profile'>
              Profile
              {/* <img src={user.image} /> */}
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to='/services'>
              Service
              {/* <img src={user.image} /> */}
            </Link>
          </Nav.Link>
          
          <Nav.Link onClick={() => handleLogout()}>
            Logout
          </Nav.Link>
        </>
      )
    } else {
      // links to show up when Not logged in
      return (
        <>
          <Nav.Link>
            <Link to='/login'>
              <li>
                Login
              </li>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/StepByStep'>
              <li>
                Sign Up
              </li>
            </Link>
          </Nav.Link>
          <Nav.Link>
            
          </Nav.Link>
        </>
      )
    }
  }
  
  // links that show up regardless of login or out
  return (
    <>
     <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link to='/'><Navbar.Brand>Gruber</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              {/* Links that show up regardless of login or not */}
              { rightNavItem() }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer> 
    { value => <MainNavbar { ...props } { ...value } /> }
  </AuthConsumer>
)
 
export default ConnectedMainNavbar;
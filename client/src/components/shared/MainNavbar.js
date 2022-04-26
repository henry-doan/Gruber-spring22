import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import StepByStep from "./StepByStep";
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import { NavCon, SBSButton, LButton } from "../styles/Styles";
import "../styles/App.css"


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
          
          <Nav.Link className="color-link">

            <Link to='/StepByStep'>
              <li>
                Sign Up
              </li>
            </Link>
            <Link to='/login'>
              {/* <li>
                Login
              </li> */}
              <LButton>Login</LButton>

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
    
     <Navbar className= "color-nav" collapseOnSelect expand="lg">
        <Nav>
            <Link to='/' className="color-link">
              <Navbar.Brand>Gruber</Navbar.Brand>
            </Link>
          </Nav>
          <Nav >
            <Nav.Item>
              <Nav.Link>
                <Link to='/team' className="color-link">
                  Team
                </Link>
              </Nav.Link>
            </Nav.Item>
             <Nav.Item>
              <Nav.Link>
                <Link to='/submission' className="color-link">
                  Submission
                </Link>
              </Nav.Link>
            </Nav.Item>
           
          </Nav>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              {/* Links that show up regardless of login or not */}
              { rightNavItem() }
            </Nav>
          </Navbar.Collapse>
        
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
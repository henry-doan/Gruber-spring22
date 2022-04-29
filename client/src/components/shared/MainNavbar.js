import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import StepByStep from "./StepByStep";
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import { NavCon, SBSButton, LButton, NavImg, NavCollapse } from "../styles/Styles";
import "../styles/App.css"
import logogw2 from "../styles/images/logogw2.png";


const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const MainNavbar = ({user, handleLogout }) => {
  
  const rightNavItem = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
        
          <Nav.Link >
            <Link to='/profile'>
              
              <img className="navprof" src={user.image ? user.image : defaultImage} />
            </Link>
          </Nav.Link>

          <Nav.Link className="color-link">
            <Link to='/services' className="color-link">
              Services
              {/* <img src={user.image} /> */}
            </Link>
          </Nav.Link>

          
           
          
          <Nav.Link className="log-color-link" onClick={() => handleLogout()} >
            
            Logout
           
          </Nav.Link>
          
        </>
      )
    } else {
      // links to show up when Not logged in
      return (
        <>

          <Nav.Link className="color-link">
            <Link to='/team' className="color-link">
              Team
            </Link>
          </Nav.Link>
          
          <Nav.Link className="color-link">
            <Link to='/StepByStep' className="color-link">
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
    
     <NavCon collapseOnSelect >
        <Nav>
            <Link to='/'className="color-link">
              <NavImg src={logogw2} ></NavImg>
            </Link>
          </Nav>
          <Nav >
            
             {/* <Nav.Item>
              <Nav.Link>
                <Link to='/submission' className="color-link">
                  Submission
                </Link>
              </Nav.Link>
            </Nav.Item> */}
           
          </Nav>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              {/* Links that show up regardless of login or not */}
              {/* <Nav.Link className="color-link">
                <Link to='/team' className="color-link">
                  Team
                </Link>
              </Nav.Link> */}
              { rightNavItem() }
            </Nav>
          </Navbar.Collapse>
        
      </NavCon>
    
    </>
  )
}


const ConnectedMainNavbar = (props) => (
  <AuthConsumer> 
    { value => <MainNavbar { ...props } { ...value } /> }
  </AuthConsumer>
)


 
export default ConnectedMainNavbar;
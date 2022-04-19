
import { Link } from 'react-router-dom';
import { Row, Container, Button, Col} from "react-bootstrap";

const Footer = () => {
  return(
    <div className="main-footer">
      <div className="container">
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Powered by Devpoint Studios LLC | Get Started | Privacy Policy
          </p>
        </div>
         

      </div>
    </div>
  )

}

export default Footer

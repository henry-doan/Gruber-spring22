import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";

import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { RegCon } from '../styles/Styles';


const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({ email: '', fname: '', lname: '', phone: '', role: 'Customer', password: '', passwordConfirmation: '' }) 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user);
     } else {
      alert('Passwords Do Not Match!')
     }
  }
  
  return (
    <>
    
    <RegCon>
      <Row>
      <Col>
    <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" width="350px"></img>
    </Col>
      <Col>
      <h1>Register</h1>
      
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col> 
            <Form.Group>
              <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  autoFocus
                  name='email'
                  value={user.email}
                  placeholder='Email'
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
            </Form.Group>
          </Col>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name='fname'
                  value={user.fname}
                  placeholder='First Name'
                  onChange={(e) => setUser({ ...user, fname: e.target.value })}
                />
            </Form.Group>
          <Col>  
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="lname"
                  required
                  name='lname'
                  value={user.lname}
                  placeholder='Last Name'
                  onChange={(e) => setUser({ ...user, lname: e.target.value })}
                />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="phone"
                  required
                  name='phone'
                  value={user.phone}
                  placeholder='Phone'
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Role</Form.Label>
                <Form.Select 
                  required
                  name='role'
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                >
                  <option value="Customer">Customer</option>
                  <option value="Gruber">Gruber</option>
                </Form.Select>
            </Form.Group>
          </Col>
        {/* <label>Image</label>
        <input 
        type='text'
        required
        name='image'
        value={user.image}
        onChange={(e) => setUser({ ...user, image: e.target.value })}
        placeholder='User Image'
      /> */}
          <Col>
            <Form.Group>
              <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name='password'
                  value={user.password}
                  placeholder='Password'
                  type='password'
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  required
                  name='passwordConfirmation'
                  value={user.passwordConfirmation}
                  placeholder='Password Confirmation'
                  type='password'
                  onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
                />
            </Form.Group>
          </Col>
        </Row>
        <br>
        </br>
        <br>
        </br>
        {/* <Link to="/StepTwo"> */}
        <Button type='submit'>Submit</Button>
        {/* </Link> */}
      </Form>
      </Col>
      </Row>
      </RegCon>
      
      
     
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register { ...props } {...value} /> }
  </AuthConsumer>
)

export default ConnectedRegister;
import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import Flash from '../shared/Flash';
import { MainLogin, MainLoginText, LogButton} from '../styles/Styles';
import { Button, Row } from 'react-bootstrap';
import "../styles/App.css"

const Login = ({ handleLogin, errors, setErrors }) => {
  const [user, setUser] = useState({ email: '', password: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  }
  
  return (
    <>
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        :
        null
      }
      <MainLogin>
        <MainLoginText>
        
      <h1>Login</h1>
      
      <form onSubmit={handleSubmit}className='login-form'>
        <Row>
        {/* <label>Email</label> */}
        <input className='form-input'
          type="email"
          autoFocus
          required         
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        /></Row>
        <Row>
        
        <input className='form-input'
          required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        /></Row>
        <LogButton type='submit'>Login</LogButton>
      </form>
      
      </MainLoginText>
      </MainLogin>
    </>
  )  
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;
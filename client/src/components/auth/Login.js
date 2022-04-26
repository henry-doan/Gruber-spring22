import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import Flash from '../shared/Flash';
import { MainHeader, MainHeaderText, SubHeader, NavCon, GrubCon, LogButton} from '../styles/Styles';
import { Button } from 'react-bootstrap';

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
      <MainHeader>
        <MainHeaderText>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          autoFocus
          required         
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <LogButton type='submit'>Login</LogButton>
      </form>
      </MainHeaderText>
      </MainHeader>
    </>
  )  
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;
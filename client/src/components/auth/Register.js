import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import PriceForm from '../shared/PriceForm';

const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({ email: '', fname: '', lname: '', phone: '', role: '', password: '', passwordConfirmation: '' }) 
  
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
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          required
          autoFocus
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>First Name</label>
        <input
          type="text"
          required
          name='fname'
          value={user.fname}
          placeholder='First Name'
          onChange={(e) => setUser({ ...user, fname: e.target.value })}
        />
        <label>Last Name</label>
        <input
          type="lname"
          required
          name='lname'
          value={user.lname}
          placeholder='Last Name'
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
        />
        <label>Phone</label>
        <input
          type="phone"
          required
          name='phone'
          value={user.phone}
          placeholder='Phone'
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <label>Role</label>
        <input
          type="role"
          required
          name='role'
          value={user.role}
          placeholder='Role'
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        />
        <label>Image</label>
        <input 
          type='text'
          required
          name='image'
          value={user.image}
          onChange={(e) => setUser({ ...user, image: e.target.value })}
          placeholder='User Image'
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
        <label>Password Confirmation</label>
        <input
          required
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          placeholder='Password Confirmation'
          type='password'
          onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
        />
        <button type='submit'>Submit</button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <PriceForm />
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register { ...props } {...value} /> }
  </AuthConsumer>
)

export default ConnectedRegister;
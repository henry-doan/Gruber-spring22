import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/auth/Profile';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
    <>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path='/profile' element={ <Profile /> } />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
    </FetchUser>
  </>
)

export default App;

import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import MainNavbar from './components/shared/MainNavbar';
import Footer from './components/shared/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/auth/Profile';
import Services from './components/services/Services';
import ServiceForm from './components/services/ServiceForm';
import Notes from './components/notes/Notes';
import Addresses from './components/addresses/Addresses';
import Invoices from './components/invoices/Invoices';
import Confirmations from './components/confirmations/Confirmations';
import StepByStep from './components/shared/StepByStep';
import StepTwo from './components/shared/StepTwo';


const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
    <>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/StepByStep' element={ <StepByStep /> } />
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path='/StepTwo' element={ <StepTwo />} />
          <Route path='/services' element={ <Services /> } />
          <Route path='/services/:serviceId/edit' element={ <ServiceForm /> } />
          <Route path='/services/:serviceId/notes' element={ <Notes/> } />
          <Route path='/services/:serviceId/addresses' element={ <Addresses/> } />
          <Route path='/services/:serviceId/invoices' element={ <Invoices/> } />
          <Route path='/invoices/:invoiceId/confirmations' element={ <Confirmations/> } />
          <Route path='/profile' element={ <Profile /> } />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
    </FetchUser>
    <Footer />
  </>
)

export default App;

import ServiceList from './ServiceList';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ServiceForm from './ServiceForm';
import { ProfCon, LButton, ServCon, ServListCon, ServTextCon } from '../styles/Styles';
import { AuthConsumer } from '../../providers/AuthProvider';

const Services = ({user}) => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <ServCon>
        <ServListCon>

      
          <ServTextCon>
            <h1>{ user.role === 'Customer' ? 'My Services' : 'All Services' }</h1>
            { user.role === 'Customer' ?

              <LButton onClick={() => setAdd(true)}>New Service</LButton>
            :
            null
            }
          </ServTextCon>
          <Modal show={adding} onHide={() => setAdd(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <ServiceForm
              setAdd={setAdd}
              />
            </Modal.Body>
          </Modal>
              <ServiceList />
        </ServListCon>
      </ServCon>
    
    </>
  )
}

const ConnectedServices = (props) => (
  <AuthConsumer>
    { value => <Services {...value} {...props} />}
  </AuthConsumer>
)

export default ConnectedServices;
import ConfirmationList from './ConfirmationList';
import { useReducer, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ConfirmationForm from './ConfirmationForm';
import {ServCon, ServListCon, ServTextCon, LButton} from '../styles/Styles';
import { AuthConsumer } from '../../providers/AuthProvider';

const Confirmations = ({user}) => {
  const [adding, setAdd] = useState(false);

  return(
    <>
      <ServCon>
        <ServListCon>
          <Modal show={adding} onHide={() => setAdd(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <ConfirmationForm
                setAdd={setAdd}
              />
            </Modal.Body>
          </Modal>
          <ServTextCon>
            <h1>Confirmations</h1>

            { user.role === 'Gruber' ?
              <LButton onClick={() => setAdd(true)}>
                Create Confirmation
              </LButton>
              :
              null
            }
          </ServTextCon>
          <ConfirmationList />
        </ServListCon>
      </ServCon>
    </>
  )
}

const ConnectedConfirmations = (props) => (
  <AuthConsumer>
    { value => <Confirmations {...value} {...props} />}
  </AuthConsumer>
)

export default ConnectedConfirmations;
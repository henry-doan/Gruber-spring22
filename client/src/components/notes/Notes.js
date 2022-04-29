import NoteList from './NoteList';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import NoteForm from './NoteForm';
import {LButton, ServCon, ServListCon, ServTextCon} from '../styles/Styles';

const Notes = () => {
  const [adding, setAdd] = useState(false);

  return(
    <>
      <ServCon>
        <ServListCon>
          <Modal show={adding} onHide={() => setAdd(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <NoteForm
                setAdd={setAdd}
              />
            </Modal.Body>
          </Modal>
          <ServTextCon>
            <h1>All Notes</h1>
            <LButton onClick={() => setAdd(true)}>
              Create a Note
            </LButton>
          </ServTextCon>
          <NoteList />
        </ServListCon>
      </ServCon>
    </>
  )
}

export default Notes;
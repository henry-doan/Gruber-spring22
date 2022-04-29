import NoteForm from './NoteForm';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { LButton } from '../styles/Styles';

const NoteEdit = ({ id, title, body, note_img }) => {
  const [editing, setEdit] = useState(false);
  
  return (
    <>
      <LButton onClick={() => setEdit(true)}>
        Edit
      </LButton>
      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <NoteForm
            id={id}
            title={title}
            body={body}
            note_img={note_img}
            setEdit={setEdit}
          />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NoteEdit;
import NoteForm from './NoteForm';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const NoteEdit = ({ id, title, body, note_img }) => {
  const [editing, setEdit] = useState(false);
  
  return (
    <>
      <Button onClick={() => setEdit(true)}>
        Edit
      </Button>
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
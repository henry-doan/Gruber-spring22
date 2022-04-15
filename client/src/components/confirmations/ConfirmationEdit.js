import ConfirmationForm from './ConfirmationForm';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmationEdit = ({ id, workerid, conf_img }) => {
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
          <ConfirmationForm
            id={id}
            workerid={workerid}
            conf_img={conf_img}
            setEdit={setEdit}
          />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmationEdit;
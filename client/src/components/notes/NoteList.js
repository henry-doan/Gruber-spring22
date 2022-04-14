import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoteConsumer } from "../../providers/NoteProvider";
import { Row, Col, Modal, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import NoteEdit from "./NoteEdit";

const NoteList = ({ notes, note_img, getAllNotes, deleteNote }) => {
  const { serviceId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllNotes(serviceId)
  }, [])

  return (
    <>
      { notes.map( n => 
        <Row>
          <Col>
            {n.subject}
          </Col>
          <Col>
            {n.body.substring(0, 20)}
          </Col>
          <Col>
            <Button onClick={() => setShow(true)}>+</Button>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <h1>Note Show</h1>
                
                <p>
                  Title: {n.title}
                </p>
                <p>
                  Notes: {n.body}
                </p>
                {/* <p>
                  Image: {n.note_img}
                </p> */}
                <Col>
                  <img src={n.note_img} alt='note' width='50%' />
                </Col>
                <br>
                </br>

                <NoteEdit {...n} />
                <Button onClick={() => {
                  deleteNote(serviceId, n.id)
                  setShow(false)
                }}>
                  Delete
                </Button>
              </Modal.Body>
            </Modal>
          </Col>
          <hr />
        </Row> 
      )}
    </>
  )
}

const ConnectedNoteList = (props) => (
  <NoteConsumer>
    { value => <NoteList {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNoteList;
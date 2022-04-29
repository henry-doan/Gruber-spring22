import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoteConsumer } from "../../providers/NoteProvider";
import { Row, Col, Modal, Button, Container } from 'react-bootstrap';
import Moment from 'react-moment';
import NoteEdit from "./NoteEdit";
import { Link } from "react-router-dom";
import {LButton, ServCon , ServTextCon, ServListCon, ModalImg, ImgModalCenter } from '../styles/Styles';

const NoteList = ({ notes, note_img, getAllNotes, deleteNote }) => {
  const { serviceId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllNotes(serviceId)
  }, [])

  return (
    <>
      { notes.map( n => 

            <Container>
              <Row>
                <Col>
                  {n.title}
                </Col>
                <Col>
                  {n.body.substring(0, 20)}
                </Col>
                <Col>
                  <LButton onClick={() => setShow(true)}>View</LButton>
                  <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
              
                      <ServTextCon>
                        <h1>Note</h1>
              
                        <p>
                          Title:
              
                           {n.title}
                        </p>
                        <p>
                          Notes:
              
                           {n.body}
                        </p>
                      </ServTextCon>
              
                      <ImgModalCenter>
                        <ModalImg src={n.note_img} alt='note' width='50%'></ModalImg>
                      </ImgModalCenter>
              
                      <br>
                      </br>
                      <NoteEdit {...n} />
                      <LButton onClick={() => {
                        deleteNote(serviceId, n.id)
                        setShow(false)
                      }}>
                        Delete
                      </LButton>
                      {/* <Link to={`/services/${serviceId}/addresses`}>
                        Address
                      </Link> */}
                    </Modal.Body>
                  </Modal>
                </Col>
                <hr />
              </Row>
            </Container>
         
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
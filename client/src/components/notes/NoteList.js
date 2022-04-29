import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoteConsumer } from "../../providers/NoteProvider";
import { Row, Col, Modal, Button, Container } from 'react-bootstrap';
import Moment from 'react-moment';
import NoteEdit from "./NoteEdit";
import { Link } from "react-router-dom";
import {LButton, ServCon , ServTextCon, ServListCon, ModalImg, ImgModalCenter, ServiceLinks, ListBorder } from '../styles/Styles';

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
                  <p>{n.title}</p>
                </Col>
                <Col>
                  <p>{n.body.substring(0, 20)}</p>
                </Col>
                
                  <Col>
                    <LButton onClick={() => setShow(true)}>View</LButton>
                  </Col>

                  <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                      <Container>
              
                       
                      <ServTextCon>
                        <h1>Note</h1>
                      </ServTextCon>
                      
                     
                        <Row>
                          <Col>
                            <h6>
                              Title:
                            </h6>
                              <p>{n.title} </p>
                            <h6>
                              Notes:
                            </h6>
                               <p>{n.body}</p>
                          </Col>
                        <Col>
                          <img src={n.note_img} alt='note' width='100%'></img>
                        </Col>
                        </Row>
                     
              
                     
                     
                        <NoteEdit {...n} />
                        <LButton onClick={() => {
                          deleteNote(serviceId, n.id)
                          setShow(false)
                        }}>
                          Delete
                        </LButton>
                     
                      
                      </Container>
                    </Modal.Body>
                  </Modal>
                
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
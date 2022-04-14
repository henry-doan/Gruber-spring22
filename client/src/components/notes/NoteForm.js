import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useParams } from 'react-router-dom';

const NoteForm = ({ setAdd, addNote, id, title, body, note_img, setEdit, updateNote }) => {
  const [note, setNote] = useState({ title: '', body: '', note_img: ''})

  const { serviceId } = useParams()

  useEffect( () => {
    if (id) {
      setNote({ title, body, note_img })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(serviceId, id, note)
      setEdit(false)
    } else {
      addNote(serviceId, note)
      setAdd(false)
    }
    setNote({ title: '', body: '', note_img: '' })
  }

  return(
    <>
      <h1>{id ? 'Update' : 'Create'} Note</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="title"
            name='title'
            value={note.title}
            onChange={(e) => setNote({...note, title: e.target.value})}
            required
          />
        </Form.Group>
      
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control 
          
            name='note_img'
            value={note.note_img}
            onChange={(e) => setNote({...note, note_img: e.target.value})}
            required
          >
           
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Notes</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name='body'
            value={note.body}
            onChange={(e) => setNote({...note, body: e.target.value})}
            required
            placeholder='Type Your Message...'
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNoteForm;
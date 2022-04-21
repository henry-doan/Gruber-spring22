import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useParams } from 'react-router-dom';

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const NoteForm = ({ setAdd, addNote, id, title, body, note_img, setEdit, updateNote }) => {
  const [note, setNote] = useState({ title: '', body: '', note_img: null})

  const [file, setFile] = useState()

  const { serviceId } = useParams()

  useEffect( () => {
    if (id) {
      setNote({ title, body, note_img })
    }
  }, [])

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setNote({ ...note, note_img: fileItems[0].file });
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setNote({ ...note, note_img: null });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(serviceId, id, note)
      setEdit(false)
    } else {
      addNote(serviceId, note)
      setAdd(false)
    }
    setNote({ title: '', body: '', note_img: null })
  }

  return(
    <>
      <h1>{id ? 'Update' : 'Create'} Note</h1>
      <Form onSubmit={handleSubmit}>
      <FilePond 
              files={file}
              onupdatefiles={handleFileUpdate}
              onremovefile={handleFileRemoved}
              allowMultiple={true}
              name='note_img'
              labelIdle='Drag and Drop your files or <span className="filePond--label-action">
                Browse
                </span>  
              '
          />

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
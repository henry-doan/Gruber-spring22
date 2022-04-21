import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ConfirmationConsumer } from '../../providers/ConfirmationProvider';
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

const ConfirmationForm = ({ setAdd, addConfirmation, id, workerid, conf_img, setEdit, updateConfirmation}) => {
  const [confirm, setConfirm] = useState({ workerid: 0, conf_img: null})

  const [file, setFile] = useState()

  const { invoiceId } = useParams()

  useEffect( () => {
    if (id) {
      setConfirm({ workerid, conf_img})
    }
  }, [])

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setConfirm({ ...confirm, conf_img: fileItems[0].file });
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setConfirm({ ...confirm, conf_img: null });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateConfirmation(invoiceId, id, confirm)
      setEdit(false)
    } else {
      addConfirmation(invoiceId, confirm)
      setAdd(false)
    }
    setConfirm({ workerid: 0, conf_img: null})
  }

  return(
    <>
      <h1>{id ? 'Update' : 'Create'} Confirm</h1>
      <Form onSubmit={handleSubmit}>
      <FilePond 
              files={file}
              onupdatefiles={handleFileUpdate}
              onremovefile={handleFileRemoved}
              allowMultiple={true}
              name='conf_img'
              labelIdle='Drag and Drop your files or <span className="filePond--label-action">
                Browse
                </span>  
              '
          />
        <Form.Group className="mb-3">
          <Form.Label>{id}</Form.Label>
          <Form.Control 
            type="text"
            name='confirmation'
            value={confirm.workerid}
            onChange={(e) => setConfirm({...confirm, workerid: e.target.value})}
            required
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedConfirmationForm = (props) => (
  <ConfirmationConsumer>
    { value => <ConfirmationForm {...props} {...value} />}
  </ConfirmationConsumer>
)

export default ConnectedConfirmationForm;
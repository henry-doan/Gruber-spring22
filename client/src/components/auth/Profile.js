import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Row, Col, Image, Container, Button } from 'react-bootstrap';
import { PButton, LButton, ProfCon, ProfForm, BorderCol, ImgContainerRight, ServCon, ServListCon, ServTextCon } from '../styles/Styles';
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

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [formVals, setFormValue] = useState({ fname: '', lname: '', phone: '', email: '', role: '', image: null })
  const [file, setFile] = useState()

  useEffect( () => {
    const { fname, lname, phone, email, role, image } = user
    setFormValue({ fname, lname, phone, email, role, image })
  }, [])

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setFormValue({ ...formVals, image: fileItems[0].file });
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setFormValue({ ...formVals, image: null });
  }

  const profileView = () => (
    <>
      <Row>
         
            <Col><img src={user.image ? user.image : defaultImage} width='200px'></img></Col>
       
        <Col>
          <h1>Email: {user.email}</h1>
          <h1>Full Name: {user.fname} {user.lname}</h1>
          <h1>Phone: {user.phone}</h1>
          <h1>Role: {user.role}</h1>
        </Col>
      </Row>
    </>
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.id, formVals)
    setEditing(false)
    setFormValue({ ...formVals, image: null })
  }

  const editView = () => (
    
    
    <Form onSubmit={handleSubmit}>
      <Col>
      <br>
      </br>
        <FilePond 
            files={file}
            onupdatefiles={handleFileUpdate}
            onremovefile={handleFileRemoved}
            allowMultiple={false}
            name='image'
            labelIdle='Drag and Drop your files or <span className="filePond--label-action">
              Browse
              </span>  
            '
        />
        <br>
        </br>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="First Name" 
            name='fname'
            value={formVals.fname}
            onChange={(e) => setFormValue({ ...formVals, fname: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Last Name" 
            name='lname'
            value={formVals.lname}
            onChange={(e) => setFormValue({ ...formVals, lname: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Email" 
            name='email'
            value={formVals.email}
            onChange={(e) => setFormValue({ ...formVals, email: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control 
            type="text" 
            name='phone'
            value={formVals.phone}
            onChange={(e) => setFormValue({ ...formVals, phone: e.target.value })}
            required
          />
        </Form.Group>
        {/* <Form.Group>
          <Form.Label>Role</Form.Label>
          <Form.Control 
            type="text" 
            name='role'
            value={formVals.age}
            onChange={(e) => setFormValue({ ...formVals, role: e.target.value })}
            required
          />
        </Form.Group> */}
        <PButton type='submit'>Update</PButton>
      </Col>
      </Form>
    
  )

  return (
    <ProfForm>
      
          <h1>Profile</h1>
          
            { editing ? editView() : profileView() }
          
              <PButton onClick={() =>  setEditing(!editing) }>
                { editing ? 'Cancel' : 'Edit' }
              </PButton>   
    </ProfForm>
    
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedProfile;
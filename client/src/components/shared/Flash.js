import { Alert, Container } from 'react-bootstrap';
import { useState } from 'react';
import { FlashAlert, FlashCon } from '../styles/Styles';

const Flash = ({ variant, msg, setErrors }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
    
        <FlashCon>
          <FlashAlert variant={variant} onClose={() => {
            setShow(false)
            setErrors(null)
          }} dismissible>
            <Alert.Heading>
              { variant === 'danger' ?
                'Oh snap! You got an error!'
                :
                ''
              }  
            </Alert.Heading>
            <p>
              {msg}
            </p>
          </FlashAlert>
        </FlashCon>
   
    );
  }
  return null;
}

export default Flash;
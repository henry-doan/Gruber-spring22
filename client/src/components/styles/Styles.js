import styled from 'styled-components';
import {Col, Row, Container, Button} from 'react-bootstrap';

const fontSize = (size) => {
  switch(size) {
    case 'lrg':
      return '4rem';
    case 'sm':
      return '1rem';
    default:
      return '2rem';
  }
}

const textAligning = (dir) => {
  switch(dir) {
    case 'right':
      return 'right';
    case 'left':
      return 'left';
    default:
      return 'center';
  }
}

export const MainHeader = styled.div`
  background-color: #E4F1FD;
  min-height: 70vh;
  display: flex;
  margin: 3em;
  /* flex-direction: column; */
  align-items: left;
  justify-content: left;
  /* font-size: calc(10px + 2vmin); */
  color: #297FCA;

  border-bottom: 5px solid #FFFFFF;
  /* text-align: left; */
`
export const MainHeaderText = styled(Col)`
  margin: auto;
`

export const SBSRow = styled(Row)`
 margin-bottom: 20px;
 margin-top: 20px;
 border-bottom: 1px solid #f3f3f3;
 

 
 
 
  
  `

  export const SBSh3 = styled.h3`
  text-align: left;
  margin-bottom: 50px;
  border-bottom: 5px;

  
  `
  export const SBSContainer = styled(Container)`
  width: 50%;
  margin: 0 auto;
  border-bottom: 5px;
  
  
  `

  export const SBSh4 = styled.h4`
  
  
  


  `
  export const SBSimg = styled.img`
  margin-bottom: 20px;
  width: 200px;

`
export const SBSButton = styled(Button)`
margin-left: 80%;
  margin-bottom: 20px;
  width: 100px;
  

  `
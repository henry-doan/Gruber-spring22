import styled from 'styled-components';
import {Col} from 'react-bootstrap';

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
import styled from 'styled-components';
import { Row, Container, Button, Col, Form, Image } from 'react-bootstrap'


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
   /* margin: 3em; */
   /* flex-direction: column; */
   align-items: left;
   justify-content: left;
   /* font-size: calc(10px + 2vmin); */
   color: #297FCA;
  
   border-bottom: 5px solid #FFFFFF;
   text-align: left;
  `
  export const MainHeaderText = styled(Col)`
    /* margin: auto; */
  `
  export const NavCon = styled(Container)`
    border: 2px solid #808080;
    width: 100%;
  `
  export const GrubCon = styled(Container)`
  
`
export const RegCon = styled(Container)`
  
`

export const FormControl = styled(Form.Control)`
  
  height: 100px;

`

export const PriceFormCon = styled(Container)`
  border-radius: 5px;
  background-color: #E4F1FD;
  border: 4px solid #2097F0;
  padding: 10% 5% 10% 10%;
  margin: 25px auto;

`
  
export const MainTeam = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1E321B;
  
`
 
export const ProfileCard = styled.div`
  position: relative;
  font-family: sans-serif;
  width: 200px;
  height: 200px;
  background: #fff;
  padding: 30px;
  border-radius: 50%;
  box-shadow: 0 0 22px #3336;
  transition: .6s;
  margin: 0 auto;
 
  &:hover {
    border-radius: 10px;
     height: 250px;
  }
`

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: .6s;
  z-index: 99;
  &:hover {
    transform: translateY(-60px);
  }

  `


export const CardImg = styled.img`
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 0 22px #3336;
  transition: .6s;
  &:hover {
    border-radius: 10px;
  }
`

export const TeamCaption = styled.div`
  text-align: center;
  transform: translateY(-80px);
  opacity: 0;
  /* transition: .6s; */
  &:hover {
    opacity: 1;
  }
`

export const TeamName = styled.h3`
  font-size: 21px;
  font-family: sans-serif;
`


export const  TeamPara = styled.p`
  font-size: 15px;
  color: #0c52a1;
  font-family: sans-serif;
  margin: 2px 0 9px 0;
`

export const SubCon = styled(Container)`
    background-color: #1E321BF2;
    
    /* height: 600px; */
    display: flex;
    width:100%;
    padding: 70px 0px 70px 0px;
  `
  export const SubCol = styled(Container)`
  background-color: white;
  width: 50%;
  padding: 50px;
  margin-top: 100px;
  margin-bottom:100px
  
  
`



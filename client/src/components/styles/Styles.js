import styled from 'styled-components';
import { Row, Container, Button, Col, Form, Image, Card, Accordion, Navbar } from 'react-bootstrap'


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
  padding-top: 100px;
  border-bottom: 5px;
  padding-bottom: 150px;
  

  
  
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
  background-color: white;
  color: black;
  border: 2px solid #1f341d;
  &:hover {
    background-color: #BED4AA;
    color: #ffffff;
    border: none;
  }

  

  `
  export const LButton = styled(Button)`
  
  background-color: white;
  color: black;
  border: 2px solid #1f341d;
  &:hover {
    background-color: #BED4AA;
    
    border: none;
  }
  

  

  `
  export const LogButton = styled(Button)`
  
  background-color: white;
  color: black;
  border: 2px solid #1f341d;
  &:hover {
    background-color: #BED4AA;
    border: none;
  }

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
   background-image: url("https://images.unsplash.com/photo-1470137430626-983a37b8ea46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
   min-height: 100vh;
   display: flex;
   justify-content: center;
   color: #FFFFFF;
   align-items: center;
   text-align: center;
   background-repeat: no-repeat;
  background-size: cover;
  `
  export const MainHeaderText = styled(Container)`
   align-items: center;
   padding: 10px;
   margin-bottom: 125px;
  `
  export const MainLogin = styled.div`
  background-image: url("https://images.unsplash.com/photo-1470137430626-983a37b8ea46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  min-height: 100vh;
  display: flex;
  /* justify-content: center; */
  color: #FFFFFF;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
 
  /* border-bottom: 5px solid #FFFFFF; */
  text-align: center;
  padding-top: 75px;
 `
 export const MainLoginText = styled(Container)`
  /* align-items: center; */
  
 
 `
  export const ConCon = styled(Container)`
  margin-top: 15px;
  min-height: 75vh;
  text-align: center;

  
  
  
  `
  export const NavCon = styled(Navbar)`
    width: 100%;
    height: 100px;
    background-color: #21381C;
    position: fixed;
    z-index: 99;
    
  `
  export const InRow =styled(Row)`
  margin-top:75px;
  margin-bottom: 500px;
  
  `



export const RegCon = styled.div`
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 200px;
  

`

export const FormControl = styled(Form.Control)`
  
  height: 100px;

`

export const PriceFormCon = styled(Container)`
  border-radius: 5px;
  border: 4px solid #1f341d;
  padding: 10% 5% 10% 10%;
  margin: 25px auto;
  

`
  
export const MainTeam = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1E321B;
  color: white;
  background-image: url('https://images.unsplash.com/photo-1558337587-80f6bbf67e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;
  padding-top: 75px;
  
`

export const MeetTeam = styled.div`
  
  background-color: white;
  max-width: 460px;
  height: 300px;
  color: black;
  padding: 25px;
  margin: 15% 10% 10% 4%;
  border: 5px double lightgreen;
  border-radius: 10px;
  box-shadow: 0 0 22px;
  opacity: .9;
  

`
 
export const ProfileCard = styled(Card)`
  position: relative;
  font-family: sans-serif;
  
  padding: 20px;
  border-radius: 15px;
  /* box-shadow: 0 0 12px white; */
  transition: .6s;
  margin: 0px auto 15px auto;
  background-color: #00000000;
  /* border: 1px dotted ; */
  border: none;
  /* background-image: transparent; */

 
  &:hover {
    transform: scale(1.1);
    opacity: 1;
    z-index: 99;
    /* box-shadow: 0 0 20px lightgreen; */
  }
`
export const Acc = styled(Card)`
  background-color: #1E321B;
  height: 100px;
  
`

export const AccItem = styled(Accordion.Item)`
  background-color: #1E321B;
  border: none;
  
`

export const AccHeader = styled(Accordion.Header)`
  /* background-color: pink; */
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


export const CardImg = styled(Card.Img)`
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 0 22px;
  transition: .6s;
  &:hover {
    border-radius: 10px;
    transform: translateY(-30px);
    z-index: 99;
  }
`
export const CardImg2 = styled(Card.Img)`
  width: 20%;
  margin-left: 95px;
  margin-top: 10px;
  border-radius: 50%;
  box-shadow: 0 0 22px;
  color: white;
  transition: .6s;
  
`
export const NavImg = styled(Image)`
width: 110px;
margin: 0;

`
export const HomeImg = styled(Image)`
width: 600px;
margin-top: 50px;


`

export const TeamCaption = styled(Card.Body)`
  text-align: center;
  /* transform: translateY(-20px);
  opacity: 0;
  transition: .6s;
  &:hover {
    opacity: 1;
  } */
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
    min-height: 100vh;
  `
  export const SubCol = styled(Container)`
  background-color: white;
  width: 50%;
  padding: 50px;
  margin-top: 100px;
  margin-bottom:100px;
  height: 300px;
  
  
  
`
  export const MCol = styled(Col)`
  align-items: center;
  justify-content: flex-end;
  display: flex;
    
    
  `
export const imgCol = styled(Col)`
align-items: center;
justify-content: center;
  
  
`
export const RCol = styled(Col)`
align-items: center;
justify-content: center;
display: flex;
  
  
`
export const SRow = styled(Row)`
align-items: center;
justify-content: center;
  
`

export const ServCon = styled(Container)`
  min-height: 100vh;
  padding-top: 75px;
`



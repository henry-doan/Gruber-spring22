import styled from 'styled-components';
import { Row, Container, Button, Col, Form, Image, Card, Accordion, Navbar, Nav, Alert, Pagination } from 'react-bootstrap'
import home from "./images/home.jpg"



export const FlashAlert = styled(Alert)`

  z-index: 99;
  /* top: 200px; */
  width: 500px;
  align-items: center;
  margin: 0 auto;
  font-family: Exo;
  
` 

export const FlashCon = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainFooter = styled.div`
  min-width: 100%;
  background-color: #1f341d ;
  color:#fff ;
  align-items: center;
  padding: 20px;
  overflow-x: hidden;
  
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
export const SBSButton = styled.button`
  border-radius: 5px;
  margin-left: 80%;
  margin-bottom: 20px;
  width: 100px;
  background-color: white;
  color: black;
  border: 1px solid #1f341d;
  font-family: Roboto;
  &:hover {
    background-color: #BED4AA;
    color: #ffffff;
    border: 1px solid #1f341d;
  }
  `
  export const NavButton = styled.button`
  border-radius: 5px;
  margin-top: 11px;
  
  
  background-color: white;
  color: black;
  border: 1px solid #1f341d;
  font-family: Roboto;
  &:hover {
    background-color: #BED4AA;
    color: #ffffff;
    border: 1px solid #1f341d;
  }
  `

export const LButton = styled.button`
  border-radius: 5px;
  background-color: white;
  color: black;
  border: 1px solid #1f341d;
  padding: 4px 12px;
  font-family: Roboto;
  &:hover {
    background-color: #BED4AA !important; 
    border: 1px solid #1f341d;
  }
  `
export const PLButton = styled.button`
  border-radius: 5px;
  background-color: white;
  color: black;
  border: 1px solid #1f341d;
  padding: 4px 12px;
  font-family: Roboto;
  margin-left: 10px;
  
  &:hover {
    background-color: #BED4AA !important; 
    border: 1px solid #1f341d;
  }
  `
export const PButton = styled.button`
  
  background-color: white;
  color: black;
  border: 2px solid #1f341d;
  margin-top: 20px;
  width: 100px;
  border-radius: 12px;

  &:hover {
    background-color: #BED4AA !important; 
    
    border: none;
  }
  `

export const LogButton = styled.button`
  
  background-color: white;
  color: black;
  border: 2px solid #1f341d;
  border-radius: 12px;
  
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
   background-image: url("${home}");
   min-height: 100vh;
   
   justify-content: center;
   color: #FFFFFF;
   align-items: center;
   text-align: center;
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   overflow: hidden;
   
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
  justify-content: center;
  color: #FFFFFF;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* border-bottom: 5px solid #FFFFFF; */
  text-align: center;
  padding-top: 75px;
`

export const MainLoginText = styled(Container)`
  align-items: center;

`
export const ConCon = styled(Container)`
  margin-top: 15px;
  min-height: 75vh;
  text-align: center;
`
export const NavCon = styled(Navbar)`
  width: 100%;
  height: 75px;
  background-color: #21381C;
  position: fixed;
  z-index: 99;
  align-items: center;
  display:flex;
`

export const NavCollapse = styled(Nav)`
  /* align-items: right;
  display: flex;
  justify-content: flex-end; */
  
`

export const ProfForm = styled.div`
  text-align: left;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 60%;
  font-weight: bold; 
  padding-bottom: 30px;
  margin-bottom: 60px;
  background-color: white;
  
`

export const InRow =styled(Row)`
  margin-top:75px;
  margin-bottom: 500px;
  
  `
export const AdRow =styled(Row)`
  margin-top:100px;
  margin-bottom: 500px;
  padding-top: 50px;
  
  `



export const RegCon = styled.div`
  min-height: fit-content;
  justify-content: center;
  align-items: center;
  /* padding-top: 200px; */
  display: flex;
  justify-content: space-between;
  background-color: #BED4AA;
  width: 100%;
  @media (max-width: 600px) {
  display: block;
  padding-bottom:20px;
}
  
  `
  export const RegListCon = styled.div`
   /* justify-content: space-around; */
  padding-bottom: 30px;
  align-items: center;
  text-align:center;
  background-color: white;
  padding-top: 50px;
  margin: 100px;
  padding-left: 30px;
  padding-right: 30px;
  /* width: 500px; */
  @media (max-width: 600px) {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0;
  margin-top: 50px;
  
}
  
  
  `
  
  export const Regimg =styled.img`
  width: 100%;
  height: 100vh;
  
  `
  export const BigReg =styled.div`
  display: flex;
  
  min-height: 70vh;
  overflow: hidden;
  
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


export const CardImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 22px;
  transition: .6s;
  object-fit: cover;
  &:hover {
    border-radius: 10px;
    transform: translateY(-30px);
    z-index: 99;
    height: 250px;
  }
`
export const CardImg2 = styled.img`
  width: 20%;
  /* margin-left: 95px; */
  margin-top: 15px;
  border: none;
  box-shadow: 0 0 22px;
  color: white;
  background: rgba(0, 0, 0, 0)
  /* object-fit: cover; */
`

export const TeamLinks = styled.div`
  border: none;
`

export const NavImg = styled(Image)`
width: 110px;
margin: 0;

`
export const HomeImg = styled.img`
  width: 700px;
  margin-top: 50px;
  padding-left: 15px;
  padding-right: 10px;
  @media (max-width: 600px) {
    width: 450px;
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
  min-height: 100vh;
  `
  export const SubCol = styled(Container)`
  background-color: white;
  width: 50%;
  padding: 50px;
  margin-top: 100px;
  margin-bottom:100px;
  height: fit-content;
  
  
  
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

export const ServCon = styled.div`
  padding-top: 125px;
  padding-bottom: 75px;
  margin: 0 auto;
  background-color: #BED4AA;
  min-height: 90vh;
  padding-left: 25px;
  padding-right: 25px;
`

export const ServListCon = styled(Container)`
  justify-content: space-around;
  padding-bottom: 30px;
  align-items: center;
  text-align:center;
  background-color: white;
  padding-top: 50px;
  
  `
export const BigFormListCon = styled(Container)`
  justify-content: space-around;
  padding-bottom: 30px;
 
  background-color: white;
 
  
  `
export const ProListCon = styled(Container)`
  justify-content: space-around;
  padding-bottom: 30px;
  align-items: center;
  text-align:center;
  background-color: white;
  padding-top: 50px;
  padding-left:150px;
  padding-right: 150px;
  @media (max-width: 770px) {
    padding-left:50px;
  padding-right: 50px;
}
  `

export const ServTextCon = styled.div`
  align-items: center;
  text-align:center;
  text-align: center;
  margin-right: 50px;
  margin-left: 50px;
  padding-bottom: 25px;
  border-bottom: 3px solid #BED4AA; 
`

export const ProTextCon = styled.div`
  align-items: center;
  text-align:center;
  text-align: center;
  margin-bottom: 50px;
  margin-right: 50px;
  margin-left: 50px;
  padding-bottom: 25px;
  border-bottom: 3px solid #BED4AA; 
`

export const ListBorder = styled.div`
  /* align-items: center; */
  /* text-align:center; */
  /* text-align: center; */
  margin-bottom: 25px;
  margin-right: 25px;
  margin-left: 25px;
  padding-bottom: 25px;
  border-bottom: 3px solid #BED4AA;
`

export const ServiceLinks = styled.div`
  text-align: center;
  align-items: center;
  align-content: center;
`

export const ServRow = styled(Row)`
  justify-content: space-around;
  align-items: center;
  color: black;
  
 
`

export const ServCol = styled(Col)`
  width: fit-content;
`

export const ServCard = styled(Card)`
  border: 4px solid #BED4AA;
  transition: .6s;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
    z-index: 99;
    
    /* box-shadow: 0 0 20px lightgreen; */
  }
`

export const ServCardImg = styled(Card.Img)`
  height: 200px;
  width: 100%;
  object-fit: cover;
  `

export const ModalImg = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
`

export const ImgModalCenter = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  
`

export const BorderCol = styled(Col)`
  border-right: 3px solid #BED4AA;
  margin-right: 25px;
  align-content: flex-end;
  
`

export const ImgContainerRight = styled.div`
  display: flex;
  align-content: flex-end;
`

// export const ConfImg = styled.img`
//   width: 75px;
//   height: 75px;
//   border-radius: 50%;
//   box-shadow: 0 0 12px;
//   transition: .6s;
//   object-fit: cover;
// `


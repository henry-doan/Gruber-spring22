import { useState } from 'react';
import {Container, Card, Row, Col, Button, Accordion, useAccordionButton} from 'react-bootstrap';
import { MainTeam, MeetTeam, CardImg, CardImg2, ProfileCard, TeamCaption, AccItem, AccHeader, Acc} from '../styles/Styles';
import "../styles/App.css"
import derz from "../styles/images/derz.jpg"
import boston3 from "../styles/images/boston3.jpeg"
import austen from "../styles/images/austen.png"


const Team2 = () => (
  
  
  <>
  
      <MainTeam>
        
        
        <Container>
          <Row>
            <MeetTeam>
              <h1>Meet the Team</h1>
              <br></br>
              <p>A Beautiful Lawn doesn't happen by itself! We here at Gruber thrive to give you the best lawn service out there. Our team has worked hard to make sure your experience is top notch! <br></br><br></br>
              Simple, Fast, Efficient and Friendly Service!</p>
            </MeetTeam>
            <Col>
           
            </Col>
          </Row>
          <Row sm={12}>
          <ProfileCard style={{ width: '16rem' }}>
            <CardImg variant="top" src={derz} /> 
              <a href="https://github.com/BrandonShay">
              <CardImg2 className='Hide' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
              </a>
            <Card.Body>
              <Card.Title>Brandon Shay</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              
            </Card.Body>
            
            {/* <Accordion>
              <Acc>
                <Card.Header>
                  <CustomToggle eventKey="0">Brandon Shay 
                  
                  
                  </CustomToggle>
                  Front End Engineer
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the bodydfghjkljkbjhgfdghjkhgfdfgjhkjhgyuftughiojyuftugihojk</Card.Body>
                </Accordion.Collapse>
              </Acc>
             
            </Accordion> */}
          </ProfileCard>
          

          <ProfileCard style={{ width: '16rem' }}>
            <CardImg variant="top" src={austen} /> 
              <a href="https://github.com/austenwilde">
              <CardImg2 className='Hide' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
              </a>
            <Card.Body>
              <Card.Title>Austen Wilde</Card.Title>
              <Card.Text>
                Trimmin bush and Mowin' lawns since '99
              </Card.Text>
            </Card.Body>
          </ProfileCard>


          <ProfileCard style={{ width: '16rem' }}>
            <CardImg variant="top" src={boston3} />
            <a href="https://github.com/bdoug1027">
            <CardImg2 classname= 'Hide' src= 'https://cdn-icons-png.flaticon.com/512/25/25231.png'></CardImg2>
            </a>
            <Card.Body>
              <Card.Title>Boston Douglas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              
            </Card.Body>
          </ProfileCard>

          <ProfileCard style={{ width: '16rem' }}>
            <CardImg variant="top" src="https://images.unsplash.com/photo-1537800534001-f3e01aa1c34c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvd258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60" />
            <Card.Body>
              <Card.Title>Sean Patrick Parnell</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              
            </Card.Body>
          </ProfileCard>
          </Row>
        </Container>


      </MainTeam>
  </>
)

export default Team2;
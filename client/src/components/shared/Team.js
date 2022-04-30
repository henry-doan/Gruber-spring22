import { useState } from 'react';
import {Container, Card, Row, Col, Button, Accordion, useAccordionButton} from 'react-bootstrap';
import { MainTeam, MeetTeam, CardImg, CardImg2, ProfileCard, TeamCaption, AccItem, AccHeader, Acc, ServCon, ServListCon, ServTextCon} from '../styles/Styles';
import "../styles/App.css"
import derz from "../styles/images/derz.jpg"
import boston3 from "../styles/images/boston3.jpeg"
import austen from "../styles/images/austen.png"
import spp from '../styles/images/spp.JPG';


const Team2 = () => (
  
  
  <>
  
   
        
        
        <ServCon>
          <ServListCon>
          
              <ServTextCon>
                <h1>Meet the Team</h1>
                <br></br>
                <p>A Beautiful Lawn doesn't happen by itself! We here at Gruber thrive to give you the best lawn service out there. Our team has worked hard to make sure your experience is top notch! <br></br><br></br>
                Simple, Fast, Efficient and Friendly Service!</p>
              </ServTextCon>
             
            <Row sm={12}>
            <ProfileCard style={{ width: '16rem' }}>
              <CardImg variant="top" src={derz} />
                <a href="https://github.com/BrandonShay">
                <CardImg2 className='Hide' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
                </a>
              <Card.Body>
                <Card.Title>Brandon Shay</Card.Title>
                <Card.Text>
                  Mowing my way to Web Development
                </Card.Text>
          
              </Card.Body>
            </ProfileCard>
          
            <ProfileCard style={{ width: '16rem' }}>
              <CardImg variant="top" src={austen} />
                <a href="https://github.com/austenwilde">
                <CardImg2 className='Hide' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
                </a>
              <Card.Body>
                <Card.Title>Austen Wilde</Card.Title>
                <Card.Text>
                  99 Problems and Mowing ain't 1
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
                  Boston sounds like Austen
                </Card.Text>
          
              </Card.Body>
            </ProfileCard>

            <ProfileCard style={{ width: '16rem' }}>
              <CardImg variant="top" src={spp} />
                <a href="https://github.com/BrandonShay">
                <CardImg2 className='Hide' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
                </a>
              <Card.Body>
                <Card.Title>Sean Patrick Parnell</Card.Title>
                <Card.Text>
                  SPP Yeah you know me
                </Card.Text>
          
              </Card.Body>
            </ProfileCard>
            </Row>
          </ServListCon>
        </ServCon>



     
  </>
)

export default Team2;
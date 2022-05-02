import { useState } from 'react';
import {Container, Card, Row, Col, Button, Accordion, useAccordionButton} from 'react-bootstrap';
import { MainTeam, MeetTeam, CardImg, CardImg2, ProfileCard, TeamCaption, AccItem, AccHeader, Acc, ServCon, ServListCon, ServTextCon, TeamLinks} from '../styles/Styles';
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
                <TeamLinks>
                  <a href="https://github.com/BrandonShay" target="_blank">
                  <CardImg2 className='Hide' src='https://img.icons8.com/glyph-neue/2x/github.png' />
                  </a>
                  <a href="https://www.linkedin.com/in/brandonshay/" target="_blank">
                  <CardImg2 className='Hide' src='https://img.icons8.com/color/2x/linkedin.png' />
                  </a>
                  
                </TeamLinks>
              <Card.Body>
                <Card.Title>Brandon Shay</Card.Title>
                <Card.Text>
                  Mowing my way to Web Development
                </Card.Text>
          
              </Card.Body>
            </ProfileCard>
          
            <ProfileCard style={{ width: '16rem' }}>
              <CardImg variant="top" src={austen} />
                <TeamLinks>
                  <a href="https://github.com/austenwilde" target="_blank">
                  <CardImg2 className='Hide' src='https://img.icons8.com/glyph-neue/2x/github.png' />
                  </a>
                  <a href="https://www.linkedin.com/in/austenwilde/" target="_blank">
                  <CardImg2 className='Hide' src='https://img.icons8.com/color/2x/linkedin.png' />
                  </a>
                  
                </TeamLinks>
              <Card.Body>
                <Card.Title>Austen Wilde</Card.Title>
                <Card.Text>
                  99 Problems and Mowing ain't 1
                </Card.Text>
              </Card.Body>
            </ProfileCard>

            <ProfileCard style={{ width: '16rem' }}>
              <CardImg variant="top" src={boston3} />
                <TeamLinks>
                  <a href="https://github.com/bdoug1027" target="_blank">
                  <CardImg2 classname= 'Hide' src= 'https://img.icons8.com/glyph-neue/2x/github.png'></CardImg2>
                  </a>
                  <a href="https://www.linkedin.com/in/bostondouglas/" target="_blank">
                  <CardImg2 className='Hide' src='https://img.icons8.com/color/2x/linkedin.png' />
                  </a>
                  
                </TeamLinks>
              <Card.Body>
                <Card.Title>Boston Douglas</Card.Title>
                <Card.Text>
                  Boston sounds like Austen
                </Card.Text>
          
              </Card.Body>
            </ProfileCard>

            <ProfileCard style={{ width: '16rem' }}>
              <CardImg variant="top" src={spp} />
                <TeamLinks>
                  <a href="https://github.com/seanpparnell" target="_blank">
                  <CardImg2 className='Hide' src='https://img.icons8.com/glyph-neue/2x/github.png' />
                  </a>
                  <a href="https://www.linkedin.com/in/sean-patrick-parnell/" target="_blank">
                  <CardImg2 className='Hide' src='https://img.icons8.com/color/2x/linkedin.png' />
                  </a>
                 
                </TeamLinks>
              <Card.Body>
                <Card.Title>Sean Patrick Parnell</Card.Title>
                <Card.Text>
                  Fresh Cut Software Developer trimming his way to the top.
                </Card.Text>
          
              </Card.Body>
            </ProfileCard>
            </Row>
          </ServListCon>
        </ServCon>



     
  </>
)

export default Team2;
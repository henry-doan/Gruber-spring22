import { MainTeam, ProfileCard, ImgContainer, CardImg, TeamCaption, TeamName, TeamPara } from '../styles/Styles';
import { Row, Container, Card, Col } from 'react-bootstrap';
import '../styles/App.css';

const Team = () => (
  <>
    <h1>Teamsssss</h1>


 

      <div class="main">

        <Row m={8}>
          <Col>
            <div class="profile-card">
              <div class="img">
                  <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png"></img>
              </div>
              <div class="caption">
                <h3>David Corner</h3>
                <p>Front End Developer</p>
                <div class="social-links">
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class="profile-card">
              <div class="img">
                  <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png"></img>
              </div>
              <div class="caption">
                <h3>David Corner</h3>
                <p>Front End Developer</p>
                <div class="social-links">
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class="profile-card">
              <div class="img">
                  <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png"></img>
              </div>
              <div class="caption">
                <h3>David Corner</h3>
                <p>Front End Developer</p>
                <div class="social-links">
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class="profile-card">
              <div class="img">
                  <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png"></img>
              </div>
              <div class="caption">
                <h3>David Corner</h3>
                <p>Front End Developer</p>
                <div class="social-links">
                  <a href="#"><i class="fab fa-facebook">+</i></a>
                  <a href="#"><i class="fab fa-instagram">%</i></a>
                  <a href="#"><i class="fab fa-twitter">$</i></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>


  </>
)

export default Team;
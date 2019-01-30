import { Component } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import Typed from 'react-typed';

import Layout from '../components/shared/Layout';
import CustomCarousel from '../components/Carousel';

const roles = ['Developer', 'Engineer', 'Full Stack', 'JavaScript', 'React'];
const bio = [
  'Hi there, welcome to my portfolio site',
  'Please look around a while',
  'Visit the contact page to get in touch'
];

class Index extends Component {
  static async getInitialProps() {
    const { data: users } = await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .catch(err => {
        console.warn(err);
        return {};
      });

    return { users };
  }

  render() {
    const { users } = this.props;
    return (
      <Layout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/computer-bg.png" />
          </div>

          <Container>
            <Row>
              <Col md="5">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <Card className="text-dark">
                        <CardImg
                          top
                          width="100%"
                          src="/static/images/me.svg"
                          alt="Anthony Cartoon"
                          className="bg-dark"
                        />
                        <CardBody>
                          <CardTitle>Anthony Walker</CardTitle>
                          <CardSubtitle>Full Stack Developer</CardSubtitle>
                          <CardText>
                            <Typed
                              loop
                              typeSpeed={50}
                              backSpeed={20}
                              strings={[...bio]}
                              smartBackspace
                              backDelay={1000}
                              showCursor
                              cursorChar="|"
                              className="bio-typed"
                            />
                          </CardText>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="7" className="hero-welcome-wrapper">
                <CustomCarousel />
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Index;

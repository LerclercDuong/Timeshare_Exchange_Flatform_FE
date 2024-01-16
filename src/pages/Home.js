import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar';

const Home = () => {
  return (
    <>
    <Header />

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                    <Subtitle subtitle={'Know Before You Go'}/>
                    <img src={worldImg} alt=""/>
                </div>
                <h1><span className="hightlight">No mater</span> where you’re going to, we’ll take you there </h1>
                <p>Minh Duc La mot con dog vui ve luon luon hoa dong</p>
            </div>
          </Col>
          <Col lg='2'>
          <div className='hero__img-box'>
            <img src={heroImg} alt="" />
          </div>
          </Col>
          <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <video src={heroVideo} alt="" controls/>
          </div>
          </Col> 
          <Col lg='2'>
          <div className='hero__img-box mt-5'>
            <img src={heroImg02} alt="" />
          </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
  {/*===============hero end ============*/}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className='service__subtitle'> What we serve</h5>
          <h2 className='services'>We offer our best services</h2>
        </Col>
      </Row>
    </Container>
  </section>

    <Footer />
    </>
  )
}

export default Home

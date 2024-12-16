import { Col, Container,Row} from 'react-bootstrap';
import React from 'react'
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Hero from './hero';

export default function About() {
  return (
    <div>
      <Navbar/>
      <Container fluid>
      <Row className="align-items-start">
        {/* <Col md={3}>This is About</Col> */}
        <Hero/>
      </Row>
      </Container>
      <Footer/>
    </div>
  )
}

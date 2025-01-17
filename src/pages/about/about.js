import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./style.css";
import Hero from '../home/hero';

export default function About() {
  return (
    <div>
      <Navbar />
      <Container fluid className="about-container">
        <Row className="align-items-start">
          <Hero/>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
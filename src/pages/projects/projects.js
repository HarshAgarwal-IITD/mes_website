import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ProjectsPage from "./hero.js"
import { Col, Container, Row, Image } from 'react-bootstrap';

export default function About() {
  return (
    <div>
      <Navbar />
      <Container fluid className="about-container">
        <Row className="align-items-start">
          <ProjectsPage/>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
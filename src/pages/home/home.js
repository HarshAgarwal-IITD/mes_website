import Navbar from "../../components/navbar";
import Hero from "./hero";
import AboutUs from "./aboutus";
import Footer from "../../components/footer";
import Notes from "./notes";
import Events from "./events";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="content-wrapper">
        <Navbar currentPage="Home" />
        <Hero />
        <AboutUs />
        <Notes />
        <div style={{ height: "23rem", backgroundColor: "#001331" }}></div>
        <Events />
        <div style={{ height: "5rem", backgroundColor: "#001331" }}></div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

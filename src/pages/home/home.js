import Navbar from "../../components/navbar"
import Hero from "./hero"
import AboutUs from "./aboutus";
import Footer from "../../components/footer";
import Notes from "./notes";
import Events from "./events";

function Home(){

    return(
            <div className="vw-100 d-flex flex-row justify-content-center">
                <div className="d-flex flex-column" style={{width:'100vw',borderLeft:"2px",borderRight:"2px"}}>
                    <Navbar currentPage = "Home"/>
                    <Hero/>
                    <AboutUs/>
                    <Notes/>
                    <Events/>
                    <Footer/>
                </div>
            </div>
    )

}

export default Home;


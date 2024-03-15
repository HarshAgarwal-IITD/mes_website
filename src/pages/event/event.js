import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ImageGallery from "./imageGallery";
import Hero from "./hero";
import Registration from "./registration";

function Event({ id, name }) {
    name = "Event Name";
    return (
        <div className="d-flex flex-column w-100 h-100 gap-0" style={{ backgroundColor: "#001331", fontFamily:"sarpanch" }}>
            <Navbar currentPage = "Events"/>
            <Hero name = {name}/>
            <Registration/>
            <div className="vw-100 d-flex flex column display-3 ">
                <div className="w-100" style={{textAlign:"center", color:"#7BD0FB"}} >
                    <p className="fw-bold d-inline-flex " style={{borderBottom:"1px solid",borderColor:"#7BD0FB"}}>Gallery</p>
                </div>
            </div>
            <ImageGallery/>
            <Footer/>

        </div>

    )
}

export default Event;

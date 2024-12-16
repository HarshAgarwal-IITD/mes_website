import Navbar from "../../components/navbar"
import Hero from "./hero";
import CenteredTabs from "./centeredTabs";
import Footer from "../../components/footer";
function Events(){

    return(
        <div className="w-100 h-100 gap-0" style={{backgroundColor:"#001331"}}>
            <Navbar currentPage = "Events"/>
            <Hero/>
            <CenteredTabs/>
            <Footer/>
        </div>
    )

}

export default Events;


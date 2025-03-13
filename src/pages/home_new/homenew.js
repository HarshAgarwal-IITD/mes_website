import React from "react";
import Heronew from "./heronew";
import Navbar from "../../components/navbar";
import AboutUs from "./aboutusnew";
import Carouselnew from "./carousel";
import ProfessorCards from "./ProfessorCards";
import Footer from "../../components/footer";


function Homenew(){
    return(
        <div className="home-wrapper">
            <div className="content-wrapper">
                <Navbar/>
                <Heronew/>
                <AboutUs/>
                <ProfessorCards/>
                <br/>
                <br/>
                <Carouselnew/>
                <Footer/>
            </div>

        </div>
    );
}
export default Homenew;
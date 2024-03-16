import Navbar from "../../components/navbar";
import Hero from "./hero";
import Footer from "../../components/footer";
import Block from "./block";

function Team() {
    return (
        <div className="d-flex flex-column w-100 h-100 gap-0" style={{ backgroundColor:"#001331", fontFamily:"sarpanch" }}>
            <Navbar currentPage = "Team"/>
            <Hero/>
            <div className="vw-100 d-flex flex-column display-6 ">
                <br></br>
                <div className="w-100" style={{textAlign:"center", color:"#7BD0FB"}} >
                    <p className="fw-bold d-inline-flex " style={{borderBottom:"1px solid",borderColor:"#7BD0FB"}}>Overall Coordinators</p>
                </div>
                <div className="d-flex flex-row justify-content-evenly p-4">
                    <Block name={"Chirag Kansal"} por={"Faculty Coordinator"}/>
                    <Block name={"Chirag Kansal"} por={"Overall Coordinator"}/>
                </div>
                <br></br>
                <div className="w-100" style={{textAlign:"center", color:"#7BD0FB"}} >
                    <p className="fw-bold d-inline-flex " style={{borderBottom:"1px solid",borderColor:"#7BD0FB"}}>Coordinators</p>
                </div>
                <div className="d-flex flex-row justify-content-evenly p-4">
                    <Block name={"Chirag Kansal"} por={"Design Coordinator"}/>
                    <Block name={"Chirag Kansal"} por={"Admin Coordinator"}/>
                </div>
                <br></br>
                <div className="w-100" style={{textAlign:"center", color:"#7BD0FB"}} >
                    <p className="fw-bold d-inline-flex " style={{borderBottom:"1px solid",borderColor:"#7BD0FB"}}>Executives</p>
                </div>
                <div className = "d-flex flex-column gap-4">
                    <div className="d-flex flex-row justify-content-evenly p-4">
                        <Block name={"Chirag Kansal"} por={"Design Executive"}/>
                        <Block name={"Chirag Kansal"} por={"Design Executive"}/>
                        <Block name={"Chirag Kansal"} por={"Design Executive"}/>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly p-4">
                        <Block name={"Chirag Kansal"} por={"Design Executive"}/>
                        <Block name={"Chirag Kansal"} por={"Design Executive"}/>
                        <Block name={"Chirag Kansal"} por={"Design Executive"}/>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly p-4">
                        <Block name={"Chirag Kansal"} por={"Design Executive"}/>
                        <Block name={"Chirag Kansal"} por={"Design Executive"}/>
                        <Block name={"Chirag Kansal"} por={"Design Executive"}/>
                    </div>
                </div>
                <br></br>
            </div>
            <Footer/>

        </div>
    )
}

export default Team
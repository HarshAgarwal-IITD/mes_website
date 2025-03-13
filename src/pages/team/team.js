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
                <div className="d-flex w-100 flex-column gap-4 flex-wrap  align-items-center justify-content-evenly p-4">
                    <Block name={'prof . Anurag Goyal'} por={"Faculty Coordinator"}  img={'/image/profAnuragGoyal.jpg'}/>
                    <Block name={"Avni Goklani "} por={"Overall Coordinator"} img={'/image/Avni Goklani_Overall Coordinator .jpg'}/>
                </div>
                <br></br>
                <div className="w-100" style={{textAlign:"center", color:"#7BD0FB"}} >
                    <p className="fw-bold d-inline-flex " style={{borderBottom:"1px solid",borderColor:"#7BD0FB"}}>Coordinators</p>
                </div>
                <div className="flex flex-column gap-4">
      <div className="d-flex w-100 flex-column gap-4 flex-wrap flex-md-row align-items-center justify-content-evenly p-4"> 
      <Block name="Siddhi Sawarkar" por="Design Coordinator" img="/image/Siddhi Sawarkar_Design_Coordinator.jpg" />
      <Block name="Anshul Deshmukh" por="Events Coordinator" img="/image/Anshul_Deshmukh_Events_Coordinator.jpg" />
      </div>
      <div className="d-flex w-100 flex-column gap-4 flex-wrap flex-md-row align-items-center justify-content-evenly p-4"> 
      <Block name="Shivi Sisodiya" por="Academic & Research Coordinator" img="/image/Shivi Sisodiya_ Coordinator_Academics & Research_.jpg" />
      <Block name="Hieya Chaturvedi " por="Techincal Coordinator" img="/image/Hieya Chaturvedi_Technical_Coordinator.jpg" />
      </div>
     
    </div>
                <br></br>
                <div className="w-100" style={{textAlign:"center", color:"#7BD0FB"}} >
                    <p className="fw-bold d-inline-flex " style={{borderBottom:"1px solid",borderColor:"#7BD0FB"}}>Executives</p>
                </div>
                <div className = "d-flex flex-column gap-4">
                <div className="d-flex w-100 flex-column gap-4 flex-wrap flex-md-row align-items-center justify-content-evenly p-4">
                        <Block name={"Kushagra Singh"} por={"Events Executive"} img={'/image/Kushagra Singh_Events_Executive.jpg'}/>
                        <Block name={"Hardik Bihani "} por={"Events Executive"}img={'/image/Hardik Bihani_Events Executive.jpg'}/>
                        <Block name={"Harshit Gupta"} por={"Events Executive"}img={'/image/Harshit Gupta_Events_Executive.jpg'}/>
                    </div>
                    <div className="d-flex w-100 flex-column gap-4 flex-wrap flex-md-row align-items-center justify-content-evenly p-4">
                        <Block name={"Garvish Khandelwal"} por={"Events Executive"} img={'/image/Garvish khandelwal_events_executive.jpg'}/>
                        <Block name={"Gaurav"} por={"Events Executive"}img={'/image/Gaurav_Events.jpg'}/>
                        <Block name={"Himanshi Aggarwal"} por={"Events Executive"}img={'/image/Himanshi_Aggarwal_EventsExecutive.jpg'}/>
                    </div>
                    <div className=" d-flex w-100 flex-column gap-4 flex-wrap flex-md-row align-items-center justify-content-evenly p-4">
                        <Block name={"Harsh Agarwal"} por={"Technical Executive"} img={'/image/Harsh_Agarwal_tech.jpeg'} />
                        <Block name={"Sunny Saw"} por={"Technical Executive"} img={'/image/Sunny_Saw_tech.jpg'} />
                        <Block name={"Manav Gupta"} por={"Technical Executive"} img={"/image/Manav Gupta_Technical.jpg"}/>
                    </div>
                   
                    <div className="d-flex w-100 flex-column gap-4 flex-wrap flex-md-row align-items-center justify-content-evenly p-4">
                        <Block name={"Ayushi Sinha "} por={"Design Executive"} img={'image/Ayushi Sinha.jpeg'}/>
                        <Block name={"Gurseerat Kaur "} por={"Design Executive"} img={'/image/Gurseerat_Kaur_Design_executive.jpg'}/>

                    </div>
                    <div className="d-flex w-100 flex-column gap-4 flex-wrap flex-md-row align-items-center justify-content-evenly p-4">
                        <Block name={"Aaditya Sanjeev "} por={"Academic&Research Executive"} img={'/image/Aaditya_Sanjeev_Acad&Res_Exe.jpg'}/>
                        <Block name={"Prabhat Singh "} por={"Academic&Research Executive"} img={'/image/Prabhat_Singh_Acad&Res_Exe.jpg'}/>

                    </div>
                </div>
                
            </div>
            <Footer/>

        </div>
    )
}

export default Team
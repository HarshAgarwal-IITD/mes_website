import Note from "../../components/note";
import Box from '@mui/material/Box';

function Notes() {
    return (
        <div className="w-100 position-relative d-flex flex-column text-white justify-content-around align-items-start" style={{backgroundColor:"#001330", height:'90vh'}}>
            <div>
                <img src="/image/Upper-Background.png" className=" position-absolute z-0 top-0 start-0 " width='100%' style={{height:"85%"}}/>
            </div>
            <div className="position-absolute z-1  align-items-center " style={{height:"100%"}}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center', // Align the Box horizontally at the center
                    height: '90%', 
                }}
                >
                <Box
                sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    gap: 5,
                    display:'flex',
                    flexDirection: 'column',
                    width:"50%",
                    alignSelf:"center",
                    padding: "5%",
                    // backgroundImage: 'radial-gradient(closest-side at 50% 50%,#00C2FF,#001330 )',
                    // backdropFilter: 'blur(10px)' 
                    backgroundColor:"#001330",
                }}
                >
                   <Note 
  Name="Prof. P.M.V Subbarao"
  Text={`Head of Mechanical Department
Areas of Interest:
Experimental Turbulence, Tomography, Power Generation Systems and I.C. Engines
Courses and Modules:
MCL106 Fluid Mechanics
MCL346 Turbomachinery
Office: Block 2, Room No. 264 and Block 3, Room No. 255.`}
  Image="/image/profSubbarao.jpg"
  link="https://mech.iitd.ac.in/hod-profile/1"
/>
<Note 
  Name="Prof. Anurag Goyal"
  Text={`Faculty Coordinator - MES
Areas of Interest:
Thermo-fluid Systems, Heat Transfer, Refrigeration and Airconditioning, Waste-heat
Recovery, Thermal Energy Storage,
Building Energy Efficiency, Water Purification and Desalination
Courses and Modules:
MCL242 : Heat and Mass Transfer
Office: VA 10`}

  Image="/image/profAnuragGoyal.jpg"
  link="https://mech.iitd.ac.in/faculty-profile/198"
/>
<Note 
  Name="Prof. Naresh Datla"
  Text="OCS Coordinator
Areas of Interest:
Fracture and fatigue, Adhesion and adhesives,
Tissue-device interaction mechanics
Courses and Modules:
MCL104 Solid Mechanics (Moodle)
Mechanical Behaviour of Polymers and Composites (NPTEL)
Engineering Graphics and Design (NPTEL)
Office: Block III, Room No. 367
"
  Image="/image/profNareshDatla.jpg"
  link="https://mech.iitd.ac.in/faculty-profile/183"
/>

   </Box>
            </Box>
            </div>
        </div>
    );
}

export default Notes;

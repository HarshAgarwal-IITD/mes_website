import Note from "../../components/note";
import Box from '@mui/material/Box';

function Notes() {
    return (
        <div className="w-100 position-relative d-flex flex-column text-white justify-content-around align-items-start" style={{ backgroundColor: "#001330", height: '90vh' }}>
            <div>
                <img src="/image/Upper-Background.png" className="position-absolute z-1 top-0 start-0" width='100%' style={{ height: "85%" }} />
            </div>
            <div className="position-absolute z-1 align-items-center" style={{ height: "100%" }}>
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
                            display: 'flex',
                            flexDirection: 'column',
                            width: "50%",
                            alignSelf: "center",
                            paddingLeft: "4rem",
                            paddingTop: "2rem",
                            backgroundColor: "#001330",
                        }}
                    >
                        <Note
                            Name="Prof. P.M.V Subbarao"
                            Text={`<span style="font-size:1.7rem, text-align:center">Head of Mechanical Department</span><br />
<span style="color: #00BFFF; font-size: 1.5rem;">Areas of Interest:</span>
<span style="color: #B0C4DE;">Experimental Turbulence, Tomography, Power Generation Systems and I.C. Engines</span><br /><br />
<span style="color: #00BFFF; font-size: 1.5rem;">Courses and Modules:</span> 
<span style="color: #B0C4DE;">•MCL106 Fluid Mechanics<br />•MCL346 Turbomachinery</span><br /><br />
<span style="color: #00BFFF; font-size: 1.5rem;">Office:</span> <span style="color: #B0C4DE;">Block 2, Room No. 264 and Block 3, Room No. 255.</span>`}
                            Image="/image/profSubbarao.jpg"
                            link="https://mech.iitd.ac.in/hod-profile/1"
                        />
                        <Note
                            Name="Prof. Anurag Goyal"
                            Text={`<span style="font-size:1.7rem, text-align:center">Faculty Coordinator - MES</span><br />
<span style="color: #00BFFF; font-size: 1.5rem;">Areas of Interest:</span>
<span style="color: #B0C4DE;">Thermo-fluid Systems, Heat Transfer, Refrigeration and Airconditioning, Waste-heat, Recovery, Thermal Energy Storage, Building Energy Efficiency, Water Purification and Desalination</span><br /><br />
<span style="color: #00BFFF; font-size: 1.5rem;">Courses and Modules:</span> 
<span style="color: #B0C4DE;">•MCL242 : Heat and Mass Transfer</span><br /><br />
<span style="color: #00BFFF; font-size: 1.5rem;">Office:</span> <span style="color: #B0C4DE;">VA 10</span>`}
                            Image="/image/profAnuragGoyal.jpg"
                            link="https://mech.iitd.ac.in/faculty-profile/198"
                        />
                        <Note
                            Name="Prof. Naresh Datla"
                            Text={`<span style="font-size:1.7rem, text-align:center">OCS Coordinator</span><br />
<span style="color: #00BFFF; font-size: 1.5rem;">Areas of Interest:</span>
<span style="color: #B0C4DE;">Fracture and fatigue, Adhesion and adhesives, Tissue-device interaction mechanics</span><br /><br />
<span style="color: #00BFFF; font-size: 1.5rem;">Courses and Modules:</span> 
<span style="color: #B0C4DE;">•MCL104 Solid Mechanics (Moodle)<br />•Mechanical Behaviour of Polymers and Composites (NPTEL)<br />•Engineering Graphics and Design (NPTEL)</span><br /><br />
<span style="color: #00BFFF; font-size: 1.5rem;">Office:</span> <span style="color: #B0C4DE;">Block III, Room No. 367</span>`}
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

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Events(){
    return(
        <div className="w-100 vh-100 z-0" style={{ position: "relative", backgroundColor: "#001330" }}>
            <div className="w-100 h-100 z-0 position-relative">
                <img src="/image/Events.png" className="z-0 position-absolute  h-100 w-100" alt="About Us Background" />
                <div className="z-1 postion-absolute w-100 h-auto d-flex align-items-start pt-5 justify-content-center">
                    <Box style={{paddingTop:"3rem"}}
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {
                                m: 1,
                                '& .MuiInputBase-root': {
                                    '& textarea': {
                                        borderColor: '#00C2FF', // Change to desired neon blue color
                                        boxShadow: '0 0 10px #00C2FF, 0 0 10px #00C2FF', // Add glow effect
                                        color: 'white', // Change text color to match the glow
                                        borderRadius: '20px',
                                        width: '70vw',
                                        padding: '5%',
                                        textAlign:'justify',
                                        fontSize: '30px',
                                        lineHeight: '40px',
                                        overflow:'hidden',
                                        height:'1px'
                                    }
                                }
                            },
                            '& .MuiInputLabel-root': {
                                color: '#00C2FF', // Change label color to match the glow
                                position: 'absolute',
                                left: '50%',
                                top:'0.938rem',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: '#001330',
                                paddingLeft: '10px',
                                paddingRight:'10px',
                                fontSize: '40px',
                                fontFamily: "Sarpanch",
                                
                            }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-read-only-input"
                                label='Events'
                                defaultValue=""
                                InputProps={{
                                    readOnly: true,
                                    multiline: true,
                                    rows: `${Math.trunc((15/1025)*window.outerHeight)}`,

                                }}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </div>
                    </Box>
                </div>
                 {/* <div className='position-absolute text-black d-flex align-items-center  ' style={{top:"15%", left:"17.5%", height:"70%", width:"65%"}}>
                    <div className='bg-white h-100 w-100 d-flex flex-row align-items-center ' style={{border:"2px", borderRadius:"30px", borderColor:"#FFFFFF"}}>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="/image/Events.png" className="d-block w-100 h-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="/image/Upper-Background.png" className="d-block w-100 h-100 " alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="/image/Lower-Background.png" className="d-block w-100 h-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>  */}

                <div className='position-absolute text-white d-flex align-items-center' style={{ top: "10rem", left: "16.48%", height: "33rem", width: "67%"}}>
    <div className='bg-dark-blue h-100 w-100 d-flex flex-row align-items-center' style={{ borderRadius: "30px", backgroundColor: "#001F3F" }}> {/* Change to dark blue */}
        <div id="carouselExampleControls" className="carousel slide h-100 w-100" data-bs-ride="carousel">
            <div className="carousel-inner h-100">
                <div className="carousel-item active h-100">
                <h3 className='bg-dark-blue text-center'>Farewell </h3>
                    <img src="/image/Farewell.jpg" className="d-block w-100 h-100" alt="..." />
                </div>
                <div className="carousel-item h-100">
                    <h3 className='bg-dark-blue text-center'>Freshers Party</h3>
                    <img src="/image/FreshersParty.JPG" className="d-block w-100 h-100" alt="..." />
                </div>
                <div className="carousel-item h-100">
                <h3 className='bg-dark-blue text-center'>Industrial Visit</h3>
                    <img src="/image/departmentalTrip.jpg" className="d-block w-100 h-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</div>

                 
  
            </div>
            
        </div>
    )
}

export default Events;
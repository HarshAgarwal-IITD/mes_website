import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AboutUs() {
    return (
        <div className="w-100 vh-100 z-0" style={{ position: "relative", backgroundColor: "#001330" }}>
            <div className="w-100 h-100 position-relative">
                <img src="/image/AboutUs.png" className="z-0 position-absolute ps-5 h-100 w-100" alt="About Us Background" />
                <div className="z-1 postion-absolute w-100 h-100 d-flex align-items-center pe-0 justify-content-end">
                    <Box
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
                                        width: '47vw',
                                        padding: '5%',
                                        textAlign:'justify',
                                        fontSize: '30px',
                                        lineHeight: '40px',
                                        overflow:'hidden',
                                        fontFamily: "Sarpanch",

                                    }
                                }
                            },
                            '& .MuiInputLabel-root': {
                                color: '#00C2FF', // Change label color to match the glow
                                position: 'absolute',
                                left: '50%',
                                top:'15px',
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
                                label="About Us"
                                defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of. "
                                InputProps={{
                                    readOnly: true,
                                    multiline: true,
                                    rows: '10',
                                }}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

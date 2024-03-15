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
                    <Note/>
                    <Note/>
                    <Note/>


                </Box>
            </Box>
            </div>
        </div>
    );
}

export default Notes;

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Block({name,por}){
    return (
        <div className = "d-flex flex-row text-white p-3 gap-3" style = {{backgroundImage:"linear-gradient(#877FD1, #8C67AC)", borderRadius:"15px"}}>
            <div className="d-flex flex-row">
                <img src ="/image/HOD.jpeg" style = {{borderRadius:"10px"}}>

                </img>
                
            </div>
            <div className = "d-flex flex-column gap-2">
                <div className = "fw-bold fs-3">
                    {name}
                </div>
                {/* <h1 className = "fw-bold align-left">{name}</h1>
                <h4 className = "align-left">{por}</h4> */}
                <div className = "fs-6">
                    {por}
                </div>
                
                <div className="d-flex flex-row gap-3 p-2 justify-content-evenly" >
                    <InstagramIcon sx={{width:"30px", height:"30px"}}/>
                    <LinkedInIcon sx={{width:"30px", height:"30px"}}/>
                    <MailOutlineOutlinedIcon sx={{width:"30px", height:"30px"}}/>
                    <WhatsAppIcon sx={{width:"30px", height:"30px"}}/>
                </div>
            </div>
            
        </div>

    )
}
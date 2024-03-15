import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(){
    return(
        <div className="w-100 position-relative d-flex flex-row p-2 justify-content-around align-items-center text-white " style={{backgroundColor:"#001330" ,height:"15vh","fontFamily":"sarpanch"}} >

            <img src="/image/footer-background.png" className="position-absolute z-0" width='100%' style={{height:"100%"}}></img>
            <div className='position-absolute z-1 w-100 h-100 d-flex flex-row justify-content-around align-items-center text-white'>
            <div className="d-flex flex-column text-center align-item-center" style={{width:"40%"}}>
                <div><h3>For any query contact: </h3></div>
                <div><h3>abc@gmail.com</h3></div>
            </div>
            <img src="/image/mes-logo.png" width="8%" height='100%'></img>

            <div className="d-flex flex-column text-center" style={{width:"40%"}}>
            <h3>Follow Us!</h3>
            <div className="d-flex flex-row gap-4 justify-content-center" >
                <LinkedInIcon sx={{width:"7%", height:"7%"}}/>
                <XIcon sx={{width:"7%", height:"7%"}}/>
                <FacebookIcon sx={{width:"7%", height:"7%"}}/>
                <InstagramIcon sx={{width:"7%", height:"7%"}}/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;
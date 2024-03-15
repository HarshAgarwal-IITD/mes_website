export default function Registration(){
    return(
        <div className="vw-100 d-flex flex-row gap-5 p-5">
            <div className="d-flex w-50 flex-column justify-content-center position-relative text-white gap-5" >
            <div className="d-flex w-100 fs-5" style={{textAlign:"justify"}}>
            Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the dfkjalfndklsfnalsdnflkasnfdba
            </div>
            <div className="d-flex flex-row flex-wrap w-100 fs-4">
                <div className="d-flex flex-column gap-2" style={{minWidth:"50%", width:"50%"}}>
                    <div className="d-flex w-100"><p>Time:&nbsp;&nbsp;&nbsp;</p><p style={{color:"#D9C03C"}}> 6 pm</p></div>
                    <div className="d-flex w-100">Date:&nbsp;&nbsp;&nbsp;<p style={{color:"#D9C03C"}}> 30th March, 24</p></div>
                    <div className="d-flex w-100">Venue:&nbsp;&nbsp;&nbsp; <p style={{color:"#D9C03C"}}> LH121, IIT Delhi</p></div>
                </div>
                <div className="d-flex flex-column w-50 gap-2 " style={{minWidth:"50%", width:"50%"}}>
                    <div className="d-flex flex-column w-100" style={{textAlign:"center"}}>
                        Registration Deadline : <p style={{color:"#D9C03C"}}> 15th March, 2024</p>
                    </div>
                    <div className="d-flex w-100 justify-content-center">
                        <div onClick={()=>{
                            console.log("registered")
                        }}style={{backgroundImage: `url('/image/button-bg.png')`,backgroundSize: 'cover', height: '100%',padding:2, cursor:"pointer",}}>
                        &nbsp;&nbsp;&nbsp; &nbsp; Register &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
                <div className="d-flex w-100" style={{minWidth:"100%", width:"100%"}}>Contact: &nbsp;&nbsp;&nbsp; <p style={{color:"#D9C03C"}}> Deepanshu - 9403164380</p></div>
            </div>
            </div>
            <div className="d-flex w-50 justify-content-center position-relative ">
                <img src="/image/HOD.jpeg"></img>
            </div>
        </div>
    )
}
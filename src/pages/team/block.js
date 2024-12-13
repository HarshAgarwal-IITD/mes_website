

export default function Block({name,por , img}){
    return (
        <div className = "d-flex flex-row text-white p-3 gap-3" style = {{backgroundImage:"linear-gradient(#877FD1, #8C67AC)", borderRadius:"15px" , width:'450px' }}>
            <div className="d-flex flex-row">
                <img src ={img} style = {{borderRadius:"10px", height:'100px' , width:'100px'}}>

                </img>
                
            </div>
            <div className = "d-flex flex-column gap-2 ">
                <div className = "fw-bold fs-3">
                    {name}
                </div>
               
                <div className = "fs-6">
                    {por}
                </div>
                
                
            </div>
            
        </div>

    )
}
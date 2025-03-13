export default function Hero({name}){
    return(
        <div className="vw-90 d-flex flex-column justify-content-center align-items-center position-relative" >
            <div className="w-100 d-flex flex-column">
                {/* <h1 className="position-absolute top-50 start-50 translate-middle text-white">{name}</h1> */}
                <img src="/image/Team-Hero.png" width="99.99%" alt="Event Banner" />
                <div style={{
                    color: "white",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontFamily: "sarpanch",
                    fontSize: "100px",
                }}>{name}</div>
            </div>
        </div>
    )
}
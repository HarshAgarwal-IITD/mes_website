import "./hero.css";

function Hero(){
return (
    <div className="w-100 vh-100" style={{ backgroundColor:"#001330"}}>

        <div className="w-100 h-100 d-flex justify-content-center align-items-center" style={{ position: "relative" }}>
            <img src="/image/Top-Background.png" className="h-100 w-100" id="background" style={{ position: "absolute", top: 0, left: 0 }}></img>
            <img src="/image/outer-gear.png" className="revolving-image" id="revolvingImage" style={{ position: "absolute", top: "13%", left: "1%", transform: "translate(-50%, -50%)", height: "65%", width: "auto" }}></img>
            <img src="/image/Middle-Gear.png" className="opposite-image" id="revolvingImage" style={{ position: "absolute", top: "25.5%", left: "7.8%", transform: "translate(-50%, -50%)", height: "40%", width: "auto" }}></img>
            <img src="/image/Inner-Gear.png" className="revolving-image" id="revolvingImage" style={{ position: "absolute", top: "33%", left: "11.9%", transform: "translate(-50%, -50%)", height: "25%", width: "auto" }}></img>
        </div>

    </div>
)
}

export default Hero
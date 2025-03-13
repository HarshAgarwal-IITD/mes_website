import './heronew.css';
import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate

function Heronew() {
    const navigate = useNavigate();  // ✅ Initialize navigate function

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about-section");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    


    return (
        <div style={{ backgroundColor: "#001330", minHeight: "100vh" }}>
            <div className="hero-container" style={{
                width: "100%",
                height: "100vh", /* ✅ Keeps height fixed */
                backgroundImage: `url(/image/Top-Background.png)`,
                backgroundSize: "cover", /* ✅ Adjusts width proportionally */
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "relative",
            }}>
                {/* Outer Gear - Largest */}
                <img src='/image/outer-gear.png' className='outerGear' alt="Outer Rotating Gear" />
                
                {/* Middle Gear - Medium */}
                <img src='/image/Middle-Gear.png' className='middleGear' alt="Middle Rotating Gear" />
                
                {/* Inner Gear - Smallest */}
                <img src='/image/Inner-Gear.png' className='innerGear' alt="Inner Rotating Gear" />

                {/* ✅ Wrap Both Elements Inside a Parent Container */}
                <div className="text-wrapper">
                    <div className="pseudo-container"></div>
                    <div className="text-container">
                        <h1>Turning Concepts Into Reality</h1>
                        <p>
                            Welcome to the Mechanical Engineering Society at IIT Delhi, 
                            where innovation meets precision and ideas transform into impactful solutions.
                        </p>
                        <div className="text-buttons">
                            {/* ✅ Navigate to "/projects" when clicked */}
                            <button className="explore-btn" onClick={() => navigate("/projects")}>
                                Explore Projects
                            </button>
                            {/* ✅ Scroll down when clicked */}
                            <button className="join-btn" onClick={scrollToAbout}>
                                Know About Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heronew;

import "./navbar.css";

function Navbar(prop){
    const currentPage = prop.currentPage ;
    function handleClick(page) {
        console.log('Hello');
        const origin = window.origin;
        console.log(origin);
        window.location.href = `${origin+'/'+page}`;
    }
    return(
                <div className="w-100 d-flex flex-row justify-content-between align-items-center p-2" style={{"backgroundColor": "#001330", "fontFamily":"sarpanch"}}>
                    <div className="d-flex ms-2 flex-row align-items-center gap-2 fs-4" style={{color: "white", cursor:"pointer"}} onClick={() => {
                            handleClick('')
                    }}>
                    <img src="/image/mes-logo.png" height='50' width='50'></img>
                    Mechanical Engineering Society
                    </div>
                    <div className=" me-2 d-flex flex-row justify-content-end gap-5 fs-4 " style={{color: "white"}}>
                        <div 
                        style={{cursor:"pointer"}}
                        className={currentPage === 'Home' ? 'current-page' : '' }
                        id="navbar-home" onClick={() => {
                            handleClick('')
                        }}>Home</div>
                        <div 
                        style={{cursor:"pointer"}}
                        className={currentPage === 'Events' ? 'current-page' : ''}
                        id="navbar-events" onClick={() => {
                            handleClick('events')
                        }}>Events</div>
                        {/* <div 
                        style={{cursor:"pointer"}}
                        className={currentPage === 'Alum' ? 'current-page' : ''}
                        id="navbar-alum" onClick={() => {
                            handleClick('')
                        }}>Our Alum</div> */}
                        <div 
                        style={{cursor:"pointer"}}
                        className={currentPage === 'Team' ? 'current-page' : ''}
                        id="navbar-team" onClick={() => {
                            handleClick('team')
                        }}>Team</div>
                        <div 
                        style={{cursor:"pointer"}}
                        className={currentPage === 'About' ? 'current-page' : ''}
                        id="navbar-about" onClick={() => {
                            handleClick('about')
                        }}>About</div>
                    </div>
                </div>

    )

}

export default Navbar;
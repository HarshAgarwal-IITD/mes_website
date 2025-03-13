import React from "react";

function Footer() {
  return (
    <div
      className="w-100 position-relative d-flex flex-column flex-md-row p-2 justify-content-around align-items-center text-white"
      style={{
        backgroundColor: "#001330",
        height: "auto",
        minHeight: "15vh",
        fontFamily: "sarpanch",
      }}
    >
      {/* 🔹 Background Image */}
      <img
        src="/image/footer-background.png"
        className="position-absolute z-0"
        width="100%"
        style={{ height: "100%" }}
        alt="Footer Background"
      />

      {/* 🔹 Content Wrapper */}
      <div className="position-absolute z-1 w-100 h-100 d-flex flex-column flex-md-row justify-content-around align-items-center text-white">
        
        {/* 🔹 Contact Section */}
        <div className="d-flex flex-column text-center align-items-center w-100 w-md-40">
          <h3 className="footer-heading">For any query contact:</h3>
          <h3 className="footer-email">mes@admin.iitd.ac.in</h3>
        </div>

        {/* 🔹 Logo (Hidden on smaller screens) */}
        <img
          src="/image/mes-logo.png"
          className="footer-logo d-none d-md-block"
          width="8%"
          height="100%"
          alt="MES Logo"
        />

        {/* 🔹 Social Media Section */}
        <div className="d-flex flex-column text-center align-items-center w-100 w-md-40">
          <h3 className="footer-heading">Follow Us!</h3>
          <div className="d-flex flex-row gap-4 justify-content-center">
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/mesiitd/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/mesiitd/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/mes.iitdelhi?" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

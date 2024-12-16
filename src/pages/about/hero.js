import React from 'react';
import "./style.css";

export default function Hero() {
  return (
    <div className="full-height-content">
      <h1>MECHANICAL ENGINEERING SOCIETY, IIT DELHI</h1>
      <img 
        src="/image/iitd_main.jpg" 
        alt="IIT Delhi Main Building" 
        className="hero-image" 
      />

      <p>
        Welcome to the Mechanical Engineering Society (MES) at IIT Delhi, where we believe that 
        “Mechanical engineering is not just about machines; it's about making ideas move, turning 
        concepts into reality, and designing the future with precision and innovation.”
      </p>

      <h2>Welcome to the Department of Mechanical Engineering, IIT Delhi</h2>
      <img 
        src="/image/research_lab.jpeg" 
        alt="Mechanical Engineering Research" 
        className="section-image" 
      />
      <p>
        The Department of Mechanical Engineering at IIT Delhi is one of the oldest and largest 
        departments within the institute. We are proud to be recognized globally for cultivating 
        exceptional engineers known for their academic excellence and problem-solving capabilities.
      </p>

      <h2>Global Recognition</h2>
      <img 
        src="/image/global_ranking.jpeg" 
        alt="Global Recognition" 
        className="section-image" 
      />
      <p>
        IIT Delhi's Department of Mechanical Engineering has achieved a prestigious global rank of 50 in 
        the QS World University Rankings, placing it among the top 100 institutions worldwide. Our 
        dedication to academic rigour, state-of-the-art research, and industry collaboration is reflected 
        in our consistently improving global rankings.
      </p>

      <h2>Our Core Specializations</h2>
      <img 
        src="/image/specialization.jpg" 
        alt="Core Specializations" 
        className="section-image" 
      />
      <ol>
        <li>Mechanical Design</li>
        <li>Production Engineering</li>
        <li>Thermal Engineering</li>
        <li>Industrial Engineering</li>
      </ol>

      <h2>Industry Collaboration & Centers of Excellence</h2>
      <img 
        src="/image/industry_collab.png" 
        alt="Industry Collaboration" 
        className="section-image" 
      />
      <p>
        We have established multiple Centers of Excellence (CoEs) in collaboration with leading industries 
        to tackle complex research problems. These CoEs offer students numerous opportunities to engage in 
        impactful research and gain practical experience in addressing real-world challenges.
      </p>

      <h2>Facilities & Infrastructure</h2>
      <img 
        src="/image/facilities.jpg" 
        alt="Campus Facilities" 
        className="section-image" 
      />
      <p>
        The Department of Mechanical Engineering is located in Blocks II and III of the IIT Delhi campus, 
        housing modern labs and lecture halls dedicated to mechanical engineering education and research.
      </p>

      <a href="/" className="know-more">Know more</a>
    </div>
  );
}

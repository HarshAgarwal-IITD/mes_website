import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about-section" className="about-section">
      <div className="about-container">
        
        {/* 🔹 About Us Heading */}
        <div className="about-text">
          <h2 className="about-heading">
            About Mechanical Engineering Society
            <span className="about-heading-underline"></span>
          </h2>

          {/* 🔹 Expanded Description */}
          <p className="about-description">
            The <strong>Mechanical Engineering Society (MES)</strong> at IIT Delhi is a student-driven organization dedicated to fostering 
            <strong> technical excellence, research, and professional growth.</strong> We bring together 
            <strong> enthusiastic students, expert faculty, and distinguished alumni</strong> to create a vibrant ecosystem for learning and innovation.
          </p>

          <p className="about-description">
            At MES, we believe that <strong>engineering is more than just theoretical knowledge.</strong> Through 
            <strong> technical workshops, industrial collaborations, research projects, and hands-on problem-solving experiences,</strong> 
            we equip students with the tools to excel in the real world. Our goal is to bridge the gap between 
            <strong> academic learning and industry demands</strong> by providing exposure to 
            <strong> cutting-edge technology, innovation, and emerging trends in mechanical engineering.</strong>
          </p>

          <p className="about-description">
            We actively promote interdisciplinary projects in fields such as 
            <strong> robotics, computational mechanics, sustainable energy solutions, and thermal sciences.</strong> 
            By collaborating with <strong>research labs, startups, and industry experts,</strong> MES provides valuable opportunities for students to enhance their skills, 
            network with professionals, and contribute to technological advancements.
          </p>

          <p className="about-description">
            Whether you're a <strong>first-year student</strong> eager to explore mechanical concepts or an 
            <strong> experienced researcher developing breakthrough innovations,</strong> MES is your gateway to 
            <strong> learning, growth, and leadership</strong> in mechanical engineering. We are committed to shaping the 
            <strong> future leaders of the industry</strong> by offering <strong>mentorship, career guidance, and world-class learning experiences.</strong>
          </p>
          <br/>
          {/* 🔹 Our Mission & Vision */}
          <div className="about-card-container">
            <div className="about-card">
              <h3 className="about-card-title">Our Mission</h3>
              <p className="about-card-text">
                To foster <strong>innovation</strong>, provide <strong>hands-on learning experiences</strong>, and bridge the gap between 
                <strong> academic knowledge</strong> and <strong>real-world engineering challenges</strong>.
              </p>
            </div>

            <div className="about-card vision-card">
              <h3 className="about-card-title">Our Vision</h3>
              <p className="about-card-text">
                To cultivate a <strong>dynamic ecosystem</strong> of learning, research, and technological advancement that prepares students to become 
                <strong> global engineering leaders.</strong>
              </p>
            </div>
          </div>
          <br/>

          {/* 🔹 Society Statistics */}
          <div className="about-stats">
            <div className="about-stat">
              <div className="about-stat-number">15+</div>
              <div className="about-stat-label">ACTIVE PROJECTS</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-number">100+</div>
              <div className="about-stat-label">WORKSHOPS CONDUCTED</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-number">10+</div>
              <div className="about-stat-label">INDUSTRY COLLABORATIONS</div>
            </div>
          </div>
        </div>


        {/* 🔹 Workshops, Competitions & Research */}
        <div className="initiatives-heading">
        <h2>Our Key Initiatives</h2>
        <div className="underline"></div>
      </div>
        <div className="about-images-wrapper">
          <div className="about-image-card">
            <img src="/image/labvisit.jpeg" alt="Workshop Scene" className="about-image" />
            <div className="about-image-content">
              <h4 className="about-image-title">Workshops</h4>
              <p className="about-image-text">Skill Development Sessions</p>
            </div>
          </div>

          <div className="about-image-card">
            <img src="/image/competition.jpg" alt="Competition Scene" className="about-image" />
            <div className="about-image-content">
              <h4 className="about-image-title">Competitions</h4>
              <p className="about-image-text">National Level Challenges</p>
            </div>
          </div>

          <div className="about-image-card">
            <img src="/image/research.jpg" alt="Research Projects" className="about-image" />
            <div className="about-image-content">
              <h4 className="about-image-title">Research</h4>
              <p className="about-image-text">Innovative Studies & Breakthroughs</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;

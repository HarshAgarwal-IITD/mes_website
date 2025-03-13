import React, { useState } from 'react';
import { Button, Card } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import './style.css';

const ProjectsPage = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  const projects = [
    {
      title: "Thermodynamic and heat transfer simulations of thermochemical heat pumps",
      professor: "Anurag Goyal",
      description: "Simulation of thermodynamic and heat transfer processes in thermochemical heat pumps.",
      expectedSkills: "COMSOL, MATLAB, Python. Good performance in thermofluids and programming.",
      duration: "Minimum 6 months",
      startDate: "2024-11-21",
      endDate: "2025-05-21",
      link: "https://mech.iitd.ac.in/faculty-profile/198"
    },
    {
      title: "Simulation models for high-temperature heat pumps",
      professor: "Anurag Goyal",
      description: "Developing simulation models for high-temperature heat pumps.",
      expectedSkills: "COMSOL, Heat Transfer, Python. Good understanding of heat transfer systems.",
      duration: "Minimum 6 months",
      startDate: "2024-11-21",
      endDate: "2025-05-21",
      link: "https://mech.iitd.ac.in/faculty-profile/198"
    },
    {
      title: "Heat and mass transfer simulation of ammonia absorption/desorption in solid metal chloride salts",
      professor: "Anurag Goyal",
      description: "Simulating heat and mass transfer processes involving ammonia and solid metal chloride salts.",
      expectedSkills: "COMSOL, MATLAB, Simulation Techniques. Interest in learning advanced simulation software.",
      duration: "Minimum 6 months",
      startDate: "2024-11-21",
      endDate: "2025-05-21",
      link: "https://mech.iitd.ac.in/faculty-profile/198"
    },
    {
      title: "Computational analysis of bubble dynamics",
      professor: "Pratik Das",
      description: "Computational Fluid Dynamics (CFD) project to analyze bubble dynamics.",
      expectedSkills: "CFD, Fluid Mechanics, Programming. Keen interest in programming and fluid mechanics.",
      duration: "3 years",
      startDate: "2024-10-07",
      endDate: "2027-10-07",
      link: "https://mech.iitd.ac.in/faculty-profile/209"
    },
    {
      title: "Fabrication and simulation",
      professor: "Shaurya Shriyam",
      description: "Project on fabrication and simulation for various engineering applications.",
      expectedSkills: "Simulation, Fabrication Techniques. UG.",
      duration: "6 months",
      startDate: "2024-10-07",
      endDate: "2025-04-07",
      link: "https://mech.iitd.ac.in/faculty-profile/194"
    },
    {
      title: "Noise produced from EV",
      professor: "Arpan Gupta",
      description: "Understanding and analyzing noise quality in electric vehicles.",
      expectedSkills: "Acoustics, Programming. Both may contribute.",
      duration: "6 - 18 months",
      startDate: "2024-10-17",
      endDate: "2025-04-17",
      link: "https://mech.iitd.ac.in/faculty-profile/204"
    },
    {
      title: "Developing digital twin of vibratory system",
      professor: "Arpan Gupta",
      description: "Learning vibratory systems and developing digital twins.",
      expectedSkills: "Programming, Vibratory Systems. Both may contribute.",
      duration: "6 - 18 months",
      startDate: "2024-10-17",
      endDate: "2025-04-17",
      link: "https://mech.iitd.ac.in/faculty-profile/204"
    },
    {
      title: "Metamaterial",
      professor: "Arpan Gupta",
      description: "Finite element simulation related to wave propagation in metamaterials.",
      expectedSkills: "FEM, Wave Propagation. Interested to learn FEM.",
      duration: "1-2 years",
      startDate: "2024-10-17",
      endDate: "2026-10-17",
      link: "https://mech.iitd.ac.in/faculty-profile/204"
    },
    {
      title: "Combustion kinetics exploration",
      professor: "Mayank Kumar",
      description: "Exploring sustainable heating and combustion processes.",
      expectedSkills: "Thermodynamics, Combustion Kinetics. Interest and understanding of the broad area.",
      duration: "Minimum 6 months",
      startDate: "2024-10-17",
      endDate: "2025-04-17",
      link: "https://mech.iitd.ac.in/faculty-profile/186"
    },
    {
      title: "Development of improved coatings",
      professor: "Sangeeta Kohli",
      description: "Improving coatings for engineering applications.",
      expectedSkills: "Material Science, Coating Techniques. At least one relevant skill.",
      duration: "About a year",
      startDate: "2024-11-21",
      endDate: "2025-11-21",
      link: "https://mech.iitd.ac.in/faculty-profile/161"
    },
    {
      title: "Designing of Aeration Techniques",
      professor: "Bahni Ray",
      description: "Designing aeration techniques involving multidimensional flow dynamics.",
      expectedSkills: "Aeration, Multiphase Flow. UG.",
      duration: "1 year",
      startDate: "2024-11-21",
      endDate: "2025-11-21",
      link: "https://mech.iitd.ac.in/faculty-profile/188"
    },
    {
      title: "Biomechanics of human motion",
      professor: "Kaushik Mukherjee",
      description: "Studying biomechanics and its engineering applications.",
      expectedSkills: "Biomechanics, Motion Analysis. Interest and sincerity.",
      duration: "Variable",
      startDate: "2024-11-21",
      endDate: "2026-11-21",
      link: "https://mech.iitd.ac.in/faculty-profile/192"
    },
    {
      title: "CFD simulations of bubble dynamics",
      professor: "Pratik Das",
      description: "Simulating bubble dynamics using advanced CFD techniques.",
      expectedSkills: "CFD, Fluid Mechanics. Both may contribute.",
      duration: "6 months",
      startDate: "2024-11-21",
      endDate: "2025-05-21",
      link: "https://mech.iitd.ac.in/faculty-profile/209"
    },
    {
      title: "Optimization of drone propulsion",
      professor: "Supreet Singh Bahga",
      description: "Optimizing drone propulsion systems using advanced fluid dynamics.",
      expectedSkills: "Fluid Dynamics, Drone Engineering. Hands-on work in laboratory.",
      duration: "1 semester",
      startDate: "2024-11-21",
      endDate: "2025-05-21",
      link: "https://mech.iitd.ac.in/faculty-profile/179"
    },
    {
      title: "Investigation of nano-coating",
      professor: "Prof. Abhishek Das",
      description: "Exploring coating technologies on nanoscales.",
      expectedSkills: "Nanotechnology, Coating Techniques. Contact Mr. Indranil Manna.",
      duration: "1-2 months",
      startDate: "2024-11-26",
      endDate: "2025-10-26",
      link: "https://mech.iitd.ac.in/faculty-profile/199"
    },
    {
      title: "Light-weight and modular vehicles",
      professor: "Sujeet Kumar Sinha",
      description: "Design and analysis of modular, lightweight vehicles.",
      expectedSkills: "Lightweight Design, CAD, FEM. Open to UG and PG.",
      duration: "2 years",
      startDate: "2024-10-05",
      endDate: "2026-10-05",
      link: "https://mech.iitd.ac.in/faculty-profile/184"
    },
    {
      title: "Characterising a bolted joint",
      professor: "Ashish K Darpe",
      description: "Analysis and characterisation of bolted joints in mechanical systems.",
      expectedSkills: "Structural Analysis, FEM. Open to UG.",
      duration: "1 year",
      startDate: "2024-10-05",
      endDate: "2025-10-05",
      link: "https://mech.iitd.ac.in/faculty-profile/163"
    }
  ];

  const [type, setType] = useState("all");

  let filteredProjects = [];
  if (type === "past") {
    filteredProjects = projects.filter(project => project.endDate < currentDate);
  } else if (type === "ongoing") {
    filteredProjects = projects.filter(project => project.startDate <= currentDate && project.endDate >= currentDate);
  } else {
    filteredProjects = projects; // Show all projects regardless of dates
  }

  return (
    <>
      <div className="projects-page">
        <header className="projects-header">
          <h1 className="projects-title">Mechanical Projects</h1>
          <div className="projects-buttons">
            {/* <Button variant="outlined" className="project-button" onClick={() => setType("all")}>
              All Projects
            </Button> */}
            {/* <Button variant="outlined" className="project-button" onClick={() => setType("ongoing")}>
              Ongoing Projects
            </Button>
            <Button variant="outlined" className="project-button" onClick={() => setType("past")}>
              Completed Projects
            </Button> */}
          </div>
        </header>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="project-card">
                <div className="project-card-content">
                  <h2 className="project-card-title">{project.title}</h2>
                  <p className="project-card-description">{project.description}</p>
                  <p className="project-card-meta">Professor: {project.professor}</p>
                  <p className="project-card-meta">Expected Skills: {project.expectedSkills}</p>
                  <p className="project-card-meta">Duration: {project.duration}</p>
                </div>
                <Button
                  variant="contained"
                  className="project-card-button"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
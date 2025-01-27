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
      title: "Computational analysis of bubble dynamics",
      professor: "Pratik Das",
      description: "Computational Fluid Dynamics (CFD) project to analyze bubble dynamics.",
      technologies: "CFD, Fluid Mechanics, Programming",
      duration: "3 years",
      participation: "Keen interest in programming and fluid mechanics",
      startDate: "2024-10-07",
      endDate: "2027-10-07",
      link: "https://mech.iitd.ac.in/faculty-profile/209"
    },
    {
      title: "Fabrication and simulation",
      professor: "Shaurya Shriyam",
      description: "Project on fabrication and simulation for various engineering applications.",
      technologies: "Simulation, Fabrication Techniques",
      duration: "6 months",
      participation: "UG",
      startDate: "2024-10-07",
      endDate: "2025-04-07",
      link: "https://mech.iitd.ac.in/faculty-profile/194"
    },
    {
      title: "Noise produced from EV",
      professor: "Arpan Gupta",
      description: "Understanding and analyzing noise quality in electric vehicles.",
      technologies: "Acoustics, Programming",
      duration: "6 - 18 months",
      participation: "Both may contribute",
      startDate: "2024-10-17",
      endDate: "2025-04-17",
      link: "https://mech.iitd.ac.in/faculty-profile/204"
    },
    {
      title: "Developing digital twin of vibratory system",
      professor: "Arpan Gupta",
      description: "Learning vibratory systems and developing digital twins.",
      technologies: "Programming, Vibratory Systems",
      duration: "6 - 18 months",
      participation: "Both may contribute",
      startDate: "2024-10-17",
      endDate: "2025-04-17",
      link: "https://mech.iitd.ac.in/faculty-profile/204"
    },
    {
      title: "Metamaterial",
      professor: "Arpan Gupta",
      description: "Finite element simulation related to wave propagation in metamaterials.",
      technologies: "FEM, Wave Propagation",
      duration: "1-2 years",
      participation: "Interested to learn FEM",
      startDate: "2024-10-17",
      endDate: "2026-10-17",
      link: "https://mech.iitd.ac.in/faculty-profile/204"
    },
    {
      title: "Combustion kinetics exploration",
      professor: "Mayank Kumar",
      description: "Exploring sustainable heating and combustion processes.",
      technologies: "Thermodynamics, Combustion Kinetics",
      duration: "Minimum 6 months",
      participation: "Interest and understanding of the broad area",
      startDate: "2024-10-17",
      endDate: "2025-04-17",
      link: "https://mech.iitd.ac.in/faculty-profile/186"
    },
    {
      title: "Development of improved coatings",
      professor: "Sangeeta Kohli",
      description: "Improving coatings for engineering applications.",
      technologies: "Material Science, Coating Techniques",
      duration: "About a year",
      participation: "At least one relevant skill",
      startDate: "2024-11-21",
      endDate: "2025-11-21",
      link: "https://mech.iitd.ac.in/faculty-profile/161"
    },
    {
      title: "Designing of Aeration Techniques",
      professor: "Bahni Ray",
      description: "Designing aeration techniques involving multidimensional flow dynamics.",
      technologies: "Aeration, Multiphase Flow",
      duration: "1 year",
      participation: "UG",
      startDate: "2024-11-21",
      endDate: "2025-11-21",
      link: "https://mech.iitd.ac.in/faculty-profile/188"
    },
    {
      title: "Biomechanics of human motion",
      professor: "Kaushik Mukherjee",
      description: "Studying biomechanics and its engineering applications.",
      technologies: "Biomechanics, Motion Analysis",
      duration: "Variable",
      participation: "Interest and sincerity",
      startDate: "2024-11-21",
      endDate: "2026-11-21",
      link: "https://mech.iitd.ac.in/faculty-profile/192"
    },
    {
      title: "CFD simulations of bubble dynamics",
      professor: "Pratik Das",
      description: "Simulating bubble dynamics using advanced CFD techniques.",
      technologies: "CFD, Fluid Mechanics",
      duration: "6 months",
      participation: "Both may contribute",
      startDate: "2024-11-21",
      endDate: "2025-05-21",
      link: "https://mech.iitd.ac.in/faculty-profile/209"
    },
    {
      title: "Optimization of drone propulsion",
      professor: "Supreet Singh Bahga",
      description: "Optimizing drone propulsion systems using advanced fluid dynamics.",
      technologies: "Fluid Dynamics, Drone Engineering",
      duration: "1 semester",
      participation: "Hands-on work in laboratory",
      startDate: "2024-11-21",
      endDate: "2025-05-21",
      link: "https://mech.iitd.ac.in/faculty-profile/179"
    },
    {
      title: "Investigation of nano-coating",
      professor: "Prof. Abhishek Das",
      description: "Exploring coating technologies on nanoscales.",
      technologies: "Nanotechnology, Coating Techniques",
      duration: "1-2 months",
      participation: "Contact Mr. Indranil Manna",
      startDate: "2024-11-26",
      endDate: "2025-01-26",
      link: "https://mech.iitd.ac.in/faculty-profile/199"
    },
    {
      title: "Light-weight and modular vehicles",
      professor: "Sujeet Kumar Sinha",
      description: "Design and analysis of modular, lightweight vehicles.",
      technologies: "Lightweight Design, CAD, FEM",
      duration: "2 years",
      participation: "Open to UG and PG",
      startDate: "2024-10-05",
      endDate: "2026-10-05",
      link: "https://mech.iitd.ac.in/faculty-profile/184"
    },
    {
      title: "Characterising a bolted joint",
      professor: "Ashish K Darpe",
      description: "Analysis and characterisation of bolted joints in mechanical systems.",
      technologies: "Structural Analysis, FEM",
      duration: "1 year",
      participation: "Open to UG",
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
            <Button variant="outlined" className="project-button" onClick={() => setType("all")}>
              All Projects
            </Button>
            <Button variant="outlined" className="project-button" onClick={() => setType("ongoing")}>
              Ongoing Projects
            </Button>
            <Button variant="outlined" className="project-button" onClick={() => setType("past")}>
              Completed Projects
            </Button>
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
                  <p className="project-card-meta">Technologies: {project.technologies}</p>
                  <p className="project-card-meta">Duration: {project.duration}</p>
                  <p className="project-card-meta">Participation: {project.participation}</p>
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

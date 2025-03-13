import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./ProfessorCards.css";

const professors = [
  {
    name: "Prof. P.M.V Subbarao",
    designation: "Head of Mechanical Department",
    office: "Block 2, Room No. 264 and Block 3, Room No. 255",
    image: "/image/profSubbarao.jpg",
    interests: "Experimental Turbulence, Tomography, Power Generation, I.C. Engines",
    courses: ["MCL106 Fluid Mechanics", "MCL346 Turbomachinery"],
    link: "https://mech.iitd.ac.in/faculty-profile/154",
  },
  {
    name: "Prof. Anurag Goyal",
    designation: "Faculty Coordinator - MES",
    office: "VA 10",
    image: "/image/profAnuragGoyal.jpg",
    interests: "Thermo-fluid Systems, Heat Transfer, Refrigeration, Energy Storage",
    courses: ["MCL242: Heat and Mass Transfer"],
    link: "https://mech.iitd.ac.in/faculty-profile/198",
  },
  {
    name: "Prof. Naresh Datla",
    designation: "OCS Coordinator",
    office: "Block III, Room No. 367",
    image: "/image/profNareshDatla.jpg",
    interests: "Fracture and fatigue, Adhesion, Tissue-device interaction mechanics",
    courses: [
      "MCL104 Solid Mechanics (Moodle)",
      "Mechanical Behaviour of Polymers and Composites (NPTEL)",
      "Engineering Graphics and Design (NPTEL)",
    ],
    link: "https://mech.iitd.ac.in/faculty-profile/183",
  },
];

const ProfessorCard = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleExpand = (index) => {
    setExpandedCards((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((i) => i !== index)
        : [...prevExpanded, index]
    );
  };

  return (
    <div className="professor-section">
      {/* 🔹 Section Heading */}
      <div className="professor-heading">
        <h2>MEET OUR PROFESSORS</h2>
        <div className="underline"></div>
      </div>

      <div className="professor-container">
        {professors.map((prof, index) => (
          <div key={index} className={`professor-card ${expandedCards.includes(index) ? "expanded" : ""}`}>
            {/* Image */}
            <div className="professor-header">
              <img src={prof.image} alt={prof.name} className="professor-image" />
            </div>

            {/* Title Section */}
            <h3 className="professor-name">{prof.name}</h3>
            <p className="professor-designation">{prof.designation}</p>

            {/* Expanded Section */}
            {expandedCards.includes(index) && (
              <div className="professor-details">
                <p className="detail-heading">Areas of Interest</p>
                <p className="detail-text">{prof.interests}</p>

                <p className="detail-heading">Courses and Modules</p>
                <ul className="detail-list">
                  {prof.courses.map((course, idx) => (
                    <li key={idx} className="detail-list-item">{course}</li>
                  ))}
                </ul>

                <p className="detail-heading">Office</p>
                <p className="detail-text">{prof.office}</p>

                <a href={prof.link} className="visit-link">Visit Page</a>
              </div>
            )}

            {/* 🔽 Dropdown Button */}
            <button className={`expand-btn ${expandedCards.includes(index) ? "rotate" : ""}`} onClick={() => toggleExpand(index)}>
              <FaChevronDown />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessorCard;

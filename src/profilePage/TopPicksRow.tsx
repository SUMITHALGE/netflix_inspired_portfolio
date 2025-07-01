import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';

type ProfileType = 'Recruiter' | 'Developer' | 'Stalker' | 'Adventurer';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  Recruiter: [
    { title: "Skills", imgSrc: "/images/queens.jpg", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "/images/latenight.avif", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Projects", imgSrc: "/images/emily.jpg", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Certifications", imgSrc: "/images/et.jpg", route: "/certifications", icon: <FaCertificate /> },
    { title: "Recommendations", imgSrc: "/images/inception.jpg", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "/images/dune.jpg", icon: <FaEnvelope />, route: "/contact-me" }
    
  ],
  Developer: [
    { title: "Projects", imgSrc: "/images/bladerunner.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Skills", imgSrc: "/images/starwars.jpg", route: "/skills", icon: <FaCode /> },
    { title: "Certifications", imgSrc: "/images/et.jpg", route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: "/images/terminator.jpeg", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: "/images/matrix.jpg", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "/images/2001.jpg", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  Stalker: [
    { title: "Recommendations", imgSrc: "/images/queens.jpg", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "/images/lalaland2.png", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: "/images/enola.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "/images/kissingbooth2.jpg", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: "/images/emily.jpg", route: "/certifications", icon: <FaCertificate /> },
  ],
  Adventurer: [
    { title: "Music", imgSrc: "/images/interstellar.jpg", route: "/music", icon: <FaMusic /> },
    { title: "Reading", imgSrc: "/images/lotr.png", route: "/reading", icon: <FaBook /> },
    { title: "Projects", imgSrc: "/images/shawshank.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: "/images/django.jpg", route: "/certifications", icon: <FaCertificate /> },
    { title: "Contact Me", imgSrc: "/images/inception.jpg", route: "/contact-me", icon: <FaEnvelope /> },
  ]
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
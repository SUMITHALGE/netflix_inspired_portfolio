import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'Recruiter' | 'Developer' | 'Stalker' | 'Adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  Recruiter: [
    { title: "Music", imgSrc: "/images/ryan.jpg", link: "/music" },
    { title: "Reading", imgSrc: "/images/bhd.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "/images/jamesbond.webp", link: "/blogs" },
    { title: "Contact Me", imgSrc: "/images/enola.jpg", link: "/contact-me" }
  ],
  Developer: [
    { title: "Music", imgSrc: "/images/ryan.jpg", link: "/music" },
    { title: "Reading", imgSrc: "/images/bhd.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "/images/jamesbond.webp", link: "/blogs" },
    // { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "/images/conair.jpg", link: "/contact-me" }
  ],
  Stalker: [
    { title: "Music", imgSrc: "/images/ryan.jpg", link: "/music" },
    { title: "Reading", imgSrc: "/images/bhd.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "/images/jamesbond.webp", link: "/blogs" },
    { title: "Contact Me", imgSrc: "/images/conair.jpg", link: "/contact-me" }
  ],
  Adventurer: [
    { title: "Music", imgSrc: "/images/ryan.jpg", link: "/music" },
    { title: "Reading", imgSrc: "/images/bhd.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "/images/jamesbond.webp", link: "/blogs" },
    { title: "Contact Me", imgSrc: "/images/conair.jpg", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;

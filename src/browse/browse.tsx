import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "Recruiter",
      image: blueImage,
      backgroundGif: "https://media.giphy.com/media/iTX3sN0twNkBgGEMbx/giphy.gif" // Dark storm clouds
    },
    {
      name: "Developer",
      image: greyImage,
      // backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif" // Flickering neon lights
      backgroundGif: "https://media.giphy.com/media/l0JMnRwW4oBrroesM/giphy.gif?cid=ecf05e47pdg628q7z4dhveen44eczx3imdo024exyhv1t5ek&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    },
    {
      name: "Stalker",
      image: redImage,
      // backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif" // Dark, abstract digital lights
      backgroundGif: "https://media.giphy.com/media/v6Hv2Ipa8OO5i/giphy.gif?cid=ecf05e47pk9elq99d7wp934m1ik21ha92sj8g5kvznk2a0s2&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    },
    {
      name: "Adventurer",
      image: yellowImage,
      // backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif" // Dark ocean waves at night
      backgroundGif: "../images/interstellar.gif"
    },
  ];

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.name}`, { state: { profileImage: profile.image, backgroundGif: profile.backgroundGif } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;

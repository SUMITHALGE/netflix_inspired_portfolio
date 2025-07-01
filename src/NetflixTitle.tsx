import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
// import logoImage from '../src/images/logo-2.png';
import LoadingIndicator from './components/LoadingIndicator';
import PlayButtonHome from './components/PlayButtonHome';
import bgImage from './images/coverimg.jpg'; 

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    setIsClicked(true);
    setShowLoading(true);
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
  };
  
  useEffect(() => {
    if (isClicked) {
      const navigateTimer = setTimeout(() => {
        navigate('/browse');
      }, 3000);

      const loadingTimer = setTimeout(() => {
        setShowLoading(false);
      }, 2000);

      return () => {
        clearTimeout(navigateTimer);
        clearTimeout(loadingTimer);
      };
    }
  }, [isClicked, navigate]);

  return (
    
    <div className="netflix-container">
      <img 
        src='/images/logo-2.png'
        alt="Custom Logo" 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
      />
      {showLoading ? (
        <LoadingIndicator />
      ) : (
        <PlayButtonHome 
          onClick={handlePlaySound} 
          label="Sign In" 
          className={isClicked ? 'hidden' : ''} 
        />
      )}
    </div>
  );
};

export default NetflixTitle;
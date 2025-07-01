import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {
  // const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  const data: ProfileBannerType = {
    backgroundImage: process.env.REACT_APP_BACKGROUND_IMAGE || '',
    headline: process.env.REACT_APP_HEADLINE || '',
    position: process.env.REACT_APP_POSITION || '',
    linkedinLink: process.env.REACT_APP_LINKEDIN_LINK || '',
    profileSummary: process.env.REACT_APP_PROFILE_SUMMARY || '',
    resumeLink: process.env.REACT_APP_RESUME_LINK || '' 
  };

  // useEffect(() => {
    // setBannerData(data);
  // }, [data]);

  const bannerData:ProfileBannerType = data;

  if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <h2 className="banner-subheadline">&gt; {bannerData.position}</h2>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
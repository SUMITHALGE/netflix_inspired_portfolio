import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import profilePic from '../../src/images/1700037267363_1.jpg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin, FaCocktail } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
// import { getContactMe } from '../queries/getContactMe';

const ContactMe: React.FC = () => {

  // const [userData, setUserData] = useState<IContactMe>()
  const data: IContactMe = {
    profilePicture: process.env.REACT_APP_CONTACT_PROFILE_PICTURE_URL || '' ,
    name: process.env.REACT_APP_CONTACT_NAME || '',
    title: process.env.REACT_APP_CONTACT_TITLE || '',
    summary: process.env.REACT_APP_CONTACT_SUMMARY || '',
    companyUniversity: process.env.REACT_APP_CONTACT_COMPANY_UNIVERSITY || '',
    linkedinLink: process.env.REACT_APP_CONTACT_LINKEDIN_LINK || '',
    email: process.env.REACT_APP_CONTACT_EMAIL || '',
    phoneNumber: process.env.REACT_APP_CONTACT_PHONE_NUMBER || ''
  };

  // useEffect(() => {
  //   async function fetchUserData() {
  //     const data = await getContactMe();
  //     setUserData(data);
  //   }

  //   fetchUserData();
  // }, []);

  // useEffect(() => {
  //   setUserData(data);
  // }, []);

  const userData:IContactMe = data;

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Sumit Halge" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData?.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">
            {userData.summary}
          </p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>Feel free to reach out and contact me. I'm always up for a chat!
        </p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a Chai.?</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

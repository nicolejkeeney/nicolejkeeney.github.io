import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import meImg from '../assets/images/me.jpg';

function Main() {

  return (
    <div className="container" id="main">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={meImg} alt="Avatar" />
          <div className="social_icons">
            <a href="https://github.com/nicolejkeeney" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nicole-keeney/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
        <div className="content">
          <h1>Nicole Keeney</h1>
          <p>Scientific programmer focused on climate change, open science, and geospatial data analysis.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nicolejkeeney" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nicole-keeney/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
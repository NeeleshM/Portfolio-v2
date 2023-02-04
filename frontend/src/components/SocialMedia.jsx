import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href = "https://github.com/NeeleshM" target="blank" className="BsGithub">
      <BsGithub />
      </a>
    </div>
    <div>
      
      <a href = "https://www.linkedin.com/in/neelesh-maurya-32537b204" target="blank" className="BsLinkedin">
      <BsLinkedin />
      </a>
    </div>
   
    <div>
    <a href = "https://www.instagram.com/neeleshm_" target="blank" className="BsInstagram">
      <BsInstagram />
      </a>
    </div>
    <div>
    <a href = "https://t.me/+8HJcDpDQgL4xOWJl" target="blank" className="BsTelegram">
      <BsTelegram />
      </a>
    </div>
  </div>
);

export default SocialMedia;

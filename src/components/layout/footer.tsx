import React from "react";
import {
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-[80px] py-[30px]">
      <div className="justify-between flex mt-[120px]">
        <span className="text-white font-medium">Frontend Developer</span>
        <span className="text-white font-medium">Backend Developer</span>
        <span className="text-white font-medium">Fullstack Developer</span>
        <span className="text-white font-medium">UI/UX Designer</span>
      </div>
      <div className="flex gap-x-2 mt-4">
        <FaFacebook className="text-primary" size={24} />
        <FaInstagram className="text-primary" size={24} />
        <FaDribbble className="text-primary" size={24} />
        <FaEnvelope className="text-primary" size={24} />
      </div>
    </footer>
  );
};

export default Footer;

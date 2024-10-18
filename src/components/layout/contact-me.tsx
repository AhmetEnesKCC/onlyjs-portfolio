import React from "react";
import {
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import ContactForm from "../contact-form";

const ContactMe = () => {
  return (
    <div className="px-[80px] ">
      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-col">
          <h5 className="text-primary text-2xl font-bold">Connect with me:</h5>
          <p className="mt-3 font-semibold">
            Satisfied with me? Please contact me
          </p>
          <div className="flex gap-x-2 mt-4">
            <FaFacebook className="text-primary" size={24} />
            <FaInstagram className="text-primary" size={24} />
            <FaDribbble className="text-primary" size={24} />
            <FaEnvelope className="text-primary" size={24} />
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

import React from "react";
import AboutCard from "../about-card";
import { FaPen, FaCode, FaCss3, FaHtml5 } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="about-me px-[80px]">
      <h2 className="text-2xl font-bold text-primary">Hakkımda</h2>
      <div className="mt-4">
        <div className="grid grid-cols-4 gap-4">
          <AboutCard
            title="Kalem"
            description="Yazma"
            icon={<FaPen />}
            className="bg-primary"
          />
          <AboutCard
            title="Kod"
            description="Programlama"
            icon={<FaCode />}
            className="bg-subtle"
          />
          <AboutCard
            title="CSS"
            description="Stil"
            icon={<FaCss3 />}
            className="bg-subtle"
          />
          <AboutCard
            title="HTML"
            description="Yapı"
            icon={<FaHtml5 />}
            className="bg-subtle"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

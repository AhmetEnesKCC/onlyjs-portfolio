import React from "react";

const AboutCard: React.FC<{
  title: string;
  description: string;
  icon: JSX.Element;
  className?: string; // className prop'u eklendi
}> = ({ title, description, icon, className }) => {
  return (
    <div
      className={`about-card w-full aspect-[1] flex flex-col justify-end p-4 ${className}`}
    >
      <div className="flex items-start">
        <div className="text-2xl" style={{ fontSize: "32px" }}>
          {" "}
          {/* İkon boyutu ayarlandı */}
          {icon}
        </div>
      </div>
      <div className="text-left">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;

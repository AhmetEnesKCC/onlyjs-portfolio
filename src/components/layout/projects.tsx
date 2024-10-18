import React from "react";
import ProjectSlides from "../project-slides";

const Projects = () => {
  return (
    <div className="projects px-[80px]">
      <h2 className="text-2xl font-bold text-primary">Projeler</h2>
      <div className="mt-4">
        <ProjectSlides />
      </div>
    </div>
  );
};

export default Projects;

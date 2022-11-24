import React from "react";
import "./Experience.css";
import Skill from "./Skill";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <Skill name="HTML" skill="Experienced" />
            <Skill name="CSS" skill="Intermediate" />
            <Skill name="JavaScript" skill="Experienced" />
            <Skill name="Tailwind" skill="Experienced" />
            <Skill name="Sass" skill="Experienced" />
            <Skill name="React" skill="Experienced" />
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <Skill name="Nodejs" skill="Experienced" />
            <Skill name="MongoDB" skill="Intermediate" />
            <Skill name="Python" skill="Experienced" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

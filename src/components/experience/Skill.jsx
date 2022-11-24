import React from "react";

import { BsFillPatchCheckFill } from "react-icons/bs";

const Skill = ({ name, skill }) => {
  return (
    <article className="experience__details">
      <BsFillPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{name}</h4>
        <small className="text-light">{skill}</small>
      </div>
    </article>
  );
};

export default Skill;

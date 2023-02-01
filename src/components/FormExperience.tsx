import React from 'react';
import { useGlobalContext } from '../context';
import Experience from './Experience';

const FormExperience = () => {
  const { experience, addExperienceHandler } = useGlobalContext();

  return (
    <section className="section section-experience">
      <h3 className="heading-section">Experience</h3>
      {experience.map((exp) => (
        <Experience key={exp.id} {...exp} />
      ))}
      <button className="btn btn-add-experience" onClick={addExperienceHandler}>
        Add experience
      </button>
    </section>
  );
};

export default FormExperience;

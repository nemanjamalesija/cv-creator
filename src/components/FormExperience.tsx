import React from 'react';
import { useGlobalContext } from '../context';
import Experience from './Experience';

const FormExperience = () => {
  const { experience } = useGlobalContext();

  return (
    <section className="section section-experience">
      <h3 className="heading-section">Experience</h3>
      {experience.map((exp) => (
        <Experience key={exp.id} {...exp} />
      ))}
    </section>
  );
};

export default FormExperience;

import React from 'react';
import { useGlobalContext } from '../context';
import Education from './Eduation';

const FormEducation = () => {
  const { education } = useGlobalContext();

  return (
    <section className="section section-education">
      <h3 className="heading-section">Experience</h3>
      {education.map((edu) => (
        <Education key={edu.id} {...edu} />
      ))}
      <button className="btn btn-add-eduation">Add education</button>
    </section>
  );
};

export default FormEducation;

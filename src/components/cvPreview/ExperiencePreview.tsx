import React from 'react';
import { useGlobalContext } from '../../context';
import SingleExperience from './SingleExperience';

const ExperiencePreview = () => {
  const { experience } = useGlobalContext();
  return (
    <div className="info-component">
      <h3 className="modal-heading">Experience</h3>
      <div className="info-container">
        {experience.map((exp) => {
          return <SingleExperience key={exp.id} {...exp} />;
        })}
      </div>
    </div>
  );
};

export default ExperiencePreview;

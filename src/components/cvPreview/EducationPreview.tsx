import React from 'react';
import { useGlobalContext } from '../../context';
import SingleEducation from './SingleEducation';

const EducationPreview = () => {
  const { education } = useGlobalContext();
  return (
    <div className="info-container">
      <div className="info-component">
        <h3 className="modal-heading">Education</h3>
        {education.map((edu) => {
          return <SingleEducation key={edu.id} {...edu} />;
        })}
      </div>
    </div>
  );
};

export default EducationPreview;

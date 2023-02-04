import { useGlobalContext } from '../context';
import Education from './Eduation';

const FormEducation = () => {
  const { education, addEducationHandler } = useGlobalContext();

  return (
    <section className="section section-education">
      <h3 className="heading-section">Education</h3>
      {education.map((edu) => (
        <Education key={edu.id} {...edu} />
      ))}
      <button className="btn btn-add-delete" onClick={addEducationHandler}>
        Add education
      </button>
    </section>
  );
};

export default FormEducation;

import Description from './Description';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';
import IntroCvPreview from './IntroCvPreview';
import PersonalInfoPreview from './PersonalInfoPreview';
import { useGlobalContext } from '../../context';
import './cv.css';

const CvPreview = (props: any) => {
  const {
    personalInfo: { description },
    showModal,
  } = useGlobalContext();
  const { cvPrintRef } = props;

  return (
    <section ref={cvPrintRef}>
      <div
        className={` ${
          showModal ? 'modal-container' : 'modal-container hidden'
        }`}
      >
        <div className="modal-center">
          <IntroCvPreview />
          <main className="cv-main">
            <div className="textual-data">
              <Description description={description} />
              <EducationPreview />
              <ExperiencePreview />
            </div>
            <PersonalInfoPreview />
          </main>
        </div>
      </div>
    </section>
  );
};

export default CvPreview;

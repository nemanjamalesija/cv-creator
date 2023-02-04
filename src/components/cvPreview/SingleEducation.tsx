import { cvEducation } from '../../types/types';

const SingleEducation = (props: cvEducation) => {
  const { universityName, city, degree, subject, from, to, id } = props;
  return (
    <div className="info-example" key={id}>
      <p className="info-top">
        {from} - {to}
      </p>
      <div className="info-description">
        <p className="info-top">{degree}</p>
        <p className="info-bot">{subject}</p>
        <p className="info-bot">
          {universityName}, {city}
        </p>
      </div>
    </div>
  );
};

export default SingleEducation;

import { cvExperience } from '../../types/types';

const SingleExperience = (props: cvExperience) => {
  const { position, company, city, from, to, id } = props;
  return (
    <div className="info-example" key={id}>
      <p className="info-top">
        {from} - {to}
      </p>
      <div className="info-description">
        <p className="info-top">{position}</p>
        <p className="info-bot">
          {company}, {city}
        </p>
      </div>
    </div>
  );
};

export default SingleExperience;

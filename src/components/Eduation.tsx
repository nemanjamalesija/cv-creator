import React from 'react';
import { cvStructure } from '../constants/types';

const Eduation = (props: cvStructure['education'][number]) => {
  const { id, universityName, city, degree, subject, from, to } = props;

  return (
    <div className="form-control">
      <input type="text" name="universityName" value={universityName} />
      <input type="text" name="city" value={city} />
      <input type="text" name="degree" value={degree} />
      <input type="text" name="subject" value={subject} />
      <input type="text" name="from" value={from} />
      <input type="text" name="to" value={to} />
    </div>
  );
};

export default Eduation;

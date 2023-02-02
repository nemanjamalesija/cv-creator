import React from 'react';
import { cvStructure } from '../constants/types';
import { useGlobalContext } from '../context';

const Experience = (props: cvStructure['experience'][number]) => {
  const { id, position, company, city, from, to } = props;
  const { storeInputsHandler } = useGlobalContext();

  return (
    <div className="form-control">
      <input
        type="text"
        name="position"
        value={position}
        placeholder="Position"
        onChange={(e) => storeInputsHandler(e, id, 'STORE_EXPERIENCE_INFO')}
      />
      <input
        type="text"
        name="company"
        value={company}
        placeholder="Company"
        onChange={(e) => storeInputsHandler(e, id, 'STORE_EXPERIENCE_INFO')}
      />
      <input
        type="text"
        name="city"
        value={city}
        placeholder="City"
        onChange={(e) => storeInputsHandler(e, id, 'STORE_EXPERIENCE_INFO')}
      />
      <input
        type="text"
        name="from"
        value={from}
        placeholder="From (dd/mm/yy)"
        onChange={(e) => storeInputsHandler(e, id, 'STORE_EXPERIENCE_INFO')}
      />
      <input
        type="text"
        name="to"
        value={to}
        placeholder="To (dd/mm/yy)"
        onChange={(e) => storeInputsHandler(e, id, 'STORE_EXPERIENCE_INFO')}
      />
    </div>
  );
};

export default Experience;

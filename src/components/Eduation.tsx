import React from 'react';
import { cvStructure } from '../constants/types';
import { useGlobalContext } from '../context';

const Eduation = (props: cvStructure['education'][number]) => {
  const { id, universityName, city, degree, subject, from, to } = props;
  const { storeInputsHandler, dispatch } = useGlobalContext();

  return (
    <div className="form-control">
      <input
        type="text"
        name="universityName"
        placeholder="University name"
        value={universityName}
        onChange={(e) =>
          storeInputsHandler(e, id, dispatch, 'STORE_EXPERIENCE_INFO')
        }
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={city}
        onChange={(e) =>
          storeInputsHandler(e, id, dispatch, 'STORE_EXPERIENCE_INFO')
        }
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={degree}
        onChange={(e) =>
          storeInputsHandler(e, id, dispatch, 'STORE_EXPERIENCE_INFO')
        }
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={subject}
        onChange={(e) =>
          storeInputsHandler(e, id, dispatch, 'STORE_EXPERIENCE_INFO')
        }
      />
      <input
        type="text"
        name="from"
        placeholder="From (dd/mm/yy)"
        value={from}
        onChange={(e) =>
          storeInputsHandler(e, id, dispatch, 'STORE_EXPERIENCE_INFO')
        }
      />
      <input
        type="text"
        name="to"
        placeholder="To (dd/mm/yy)"
        value={to}
        onChange={(e) =>
          storeInputsHandler(e, id, dispatch, 'STORE_EXPERIENCE_INFO')
        }
      />
    </div>
  );
};

export default Eduation;

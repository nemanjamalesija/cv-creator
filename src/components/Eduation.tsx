import { cvEducation } from '../types/types';
import { useGlobalContext } from '../context';

const Eduation = (props: cvEducation) => {
  const { id, universityName, city, degree, subject, from, to } = props;
  const { storeInputsHandler, deleteUserInfoHandler } = useGlobalContext();

  return (
    <div>
      <div className="form-control">
        <input
          type="text"
          name="universityName"
          placeholder="University name"
          value={universityName}
          onChange={(e) => storeInputsHandler(e, id, 'STORE_EDUCATION_INFO')}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={(e) => storeInputsHandler(e, id, 'STORE_EDUCATION_INFO')}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={degree}
          onChange={(e) => storeInputsHandler(e, id, 'STORE_EDUCATION_INFO')}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => storeInputsHandler(e, id, 'STORE_EDUCATION_INFO')}
        />
        <input
          type="text"
          name="from"
          placeholder="From (dd/mm/yy)"
          value={from}
          onChange={(e) => storeInputsHandler(e, id, 'STORE_EDUCATION_INFO')}
        />
        <input
          type="text"
          name="to"
          placeholder="To (dd/mm/yy)"
          value={to}
          onChange={(e) => storeInputsHandler(e, id, 'STORE_EDUCATION_INFO')}
        />
      </div>
      <button
        className="btn btn-add-delete"
        onClick={() => deleteUserInfoHandler(id, 'DELETE_EDUCATION_INFO')}
      >
        Delete
      </button>
    </div>
  );
};

export default Eduation;

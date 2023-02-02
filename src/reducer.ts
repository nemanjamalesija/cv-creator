import { cvStructure } from './constants/types';
import { ACTIONS } from './constants/types';

const reducer = (state: cvStructure, action: ACTIONS) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_EDUCATION':
      const newEducation = {
        id: crypto.randomUUID(),
        universityName: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      };

      return { ...state, education: [...state.education, newEducation] };

    case 'ADD_EXPERIENCE':
      const newExperience = {
        id: crypto.randomUUID(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      };

      return { ...state, experience: [...state.experience, newExperience] };
    case 'STORE_EDUCATION_INFO':
      if (payload && typeof payload === 'object') {
        const { name, value, id } = payload;

        const newEducationArray = state.education.map((edu) => {
          if (edu.id === id) return { ...edu, [name]: value };
          else return edu;
        });

        return { ...state, education: newEducationArray };
      } else return { ...state };
    case 'STORE_EXPERIENCE_INFO':
      if (payload && typeof payload === 'object') {
        const { name, value, id } = payload;

        const newExperienceArray = state.experience.map((exp) => {
          if (exp.id === id) return { ...exp, [name]: value };
          else return exp;
        });

        return { ...state, experience: newExperienceArray };
      } else return { ...state };

    default:
      return { ...state };
  }
};

export default reducer;

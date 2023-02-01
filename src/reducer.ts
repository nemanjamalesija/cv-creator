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

    default:
      return { ...state };
  }
};

export default reducer;

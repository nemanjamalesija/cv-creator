import { initialState } from './constants/initialState';
import { cvStructure } from './types/types';
import { ACTIONS } from './types/types';

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

    case 'STORE_PERSONAL_INFO':
      if (payload && typeof payload === 'object') {
        const { name, value } = payload;

        return {
          ...state,
          personalInfo: { ...state.personalInfo, [name]: value },
        };
      } else return { ...state };

    case 'SET_PHOTO':
      if (typeof payload === 'string') {
        console.log(payload);
        return {
          ...state,
          personalInfo: { ...state.personalInfo, photo: payload },
        };
      } else return { ...state };

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

    case 'DELETE_EDUCATION_INFO':
      const newEducationArray = state.education.filter(
        (edu) => edu.id !== payload
      );

      return { ...state, education: newEducationArray };

    case 'DELETE_EXPERIENCE_INFO':
      const newExperienceArray = state.experience.filter(
        (exp) => exp.id !== payload
      );

      return { ...state, experience: newExperienceArray };

    case 'OPEN_MODAL': {
      return { ...state, showModal: true };
    }

    case 'CLOSE_MODAL':
      return { ...state, showModal: false };

    case 'RESET_STATE':
      return initialState;

    default:
      return { ...state };
  }
};

export default reducer;

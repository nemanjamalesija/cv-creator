import { cvStructure } from './constants/types';
import { ACTIONS } from './constants/types';

const reducer = (state: cvStructure, action: ACTIONS) => {
  const { type, payload } = action;
  switch (type) {
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

      break;

    default:
      return { ...state };
  }
};

export default reducer;

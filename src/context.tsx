import React, { useContext, useReducer } from 'react';
import { cvStructureAndMethods, ACTIONS } from './constants/types';
import './index.css';
import reducer from './reducer';

//////////////context
const initialState: cvStructureAndMethods = {
  personalInfo: {
    firstName: '',
    lastName: '',
    title: '',
    adress: '',
    phoneNumber: '',
    email: '',
    description: '',
  },

  experience: [
    {
      id: crypto.randomUUID(),
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    },
  ],

  education: [
    {
      id: crypto.randomUUID(),
      universityName: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    },
  ],
  addEducationHandler: () => void {},
  addExperienceHandler: () => void {},
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addEducationHandler = () => {
    dispatch({ type: 'ADD_EDUCATION' });
  };

  const addExperienceHandler = () => {
    dispatch({ type: 'ADD_EXPERIENCE' });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addEducationHandler,
        addExperienceHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

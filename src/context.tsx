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
  storeInputsHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    dispatchActionType: string
  ) => void {},
  deleteUserInfoHandler: (id: string, dispatchActionType: string) => void {},
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

  /*

  const storeEducationInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: 'STORE_EDUCATION_INFO', payload: { name, value, id } });
  };

  
  const storeExperienceHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: 'STORE_EXPERIENCE_INFO', payload: { name, value, id } });
  };
*/

  /* Refactor to a single handler function */
  const storeInputsHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    dispatchActionType: string
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch({
      type: dispatchActionType as ACTIONS['type'],
      payload: { name, value, id },
    });
  };

  const deleteUserInfoHandler = (id: string, dispatchActionType: string) => {
    dispatch({ type: dispatchActionType as ACTIONS['type'], payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addEducationHandler,
        addExperienceHandler,
        storeInputsHandler,
        deleteUserInfoHandler,
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

import React, { useContext, useReducer, useEffect } from 'react';
import { cvStructureAndMethods, ACTIONS } from './constants/types';
import './index.css';
import reducer from './reducer';

//////////////context

const initialState: cvStructureAndMethods = {
  showModal: false,

  personalInfo: {
    firstName: '',
    lastName: '',
    photo: '',
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
  setPhotoHandler: (e: any) => void {},
  submitHandler: (e: any) => void {},
  closeModalHandler: () => void {},
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

  // close cv preview on escape
  useEffect(() => {
    function handleEscapeKey(event: any) {
      if (event.key === 'Escape') {
        dispatch({ type: 'CLOSE_MODAL' });
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  });

  const setPhotoHandler = (e: any) => {
    const photo = URL.createObjectURL(e.target.files[0]);
    dispatch({ type: 'SET_PHOTO', payload: photo });
  };

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

  const submitHandler = (e: any) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch({ type: 'OPEN_MODAL' });
  };

  const closeModalHandler = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addEducationHandler,
        addExperienceHandler,
        storeInputsHandler,
        deleteUserInfoHandler,
        setPhotoHandler,
        submitHandler,
        closeModalHandler,
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

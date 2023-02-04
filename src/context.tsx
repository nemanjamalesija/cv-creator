import React, { useContext, useReducer, useEffect } from 'react';
import { ACTIONS } from './types/types';
import { initialState } from './constants/initialState';
import './index.css';
import reducer from './reducer';

//////////////context
const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPhotoHandler = (e: any) => {
    const photo = URL.createObjectURL(e.target.files[0]);
    dispatch({ type: 'SET_PHOTO', payload: photo });
  };

  const addEducationHandler = () => {
    dispatch({ type: 'ADD_EDUCATION' });
  };

  const addExperienceHandler = () => {
    dispatch({ type: 'ADD_EXPERIENCE' });
  };

  /* const storeEducationInputHandler = (
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

  const submitHandler = (e: any) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch({ type: 'OPEN_MODAL' });
  };

  const closeModalHandler = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

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

  const resetStateHandler = () => {
    dispatch({ type: 'RESET_STATE' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        resetStateHandler,
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

import { cvStructureAndMethods } from './types';

export const initialState: cvStructureAndMethods = {
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
  resetStateHandler: () => void {},
};

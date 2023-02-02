export type cvStructure = {
  showModal: boolean;
  personalInfo: {
    firstName: string;
    lastName: string;
    photo: string;
    title: string;
    adress: string;
    phoneNumber: string;
    email: string;
    description: string;
  };

  experience: {
    id: string;
    position: string;
    company: string;
    city: string;
    from: string;
    to: string;
  }[];

  education: {
    id: string;
    universityName: string;
    city: string;
    degree: string;
    subject: string;
    from: string;
    to: string;
  }[];
};

export type cvStructureAndMethods = cvStructure & {
  addEducationHandler: () => void;
  addExperienceHandler: () => void;
  storeInputsHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    dispatchActionType: string
  ) => void;
  deleteUserInfoHandler: (id: string, dispatchActionType: string) => void;
  setPhotoHandler(e: any): void;
  submitHandler(e: any): void;
  closeModalHandler(): void;
  resetStateHandler(): void;
};

type payloadStoreInputs = { name: string; value: string; id: string };

export type ACTIONS = {
  type:
    | 'ADD_EXPERIENCE'
    | 'ADD_EDUCATION'
    | 'STORE_PERSONAL_INFO'
    | 'STORE_EDUCATION_INFO'
    | 'STORE_EXPERIENCE_INFO'
    | 'DELETE_EDUCATION_INFO'
    | 'DELETE_EXPERIENCE_INFO'
    | 'SET_PHOTO'
    | 'OPEN_MODAL'
    | 'CLOSE_MODAL'
    | 'RESET_STATE';

  payload?: string | payloadStoreInputs;
};

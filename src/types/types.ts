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

export type cvEducation = cvStructure['education'][number];
export type cvExperience = cvStructure['experience'][number];

export type cvStructureAndMethods = cvStructure & {
  addEducationHandler: () => void;
  addExperienceHandler: () => void;
  storeInputsHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    dispatchActionType: string
  ) => void;
  deleteUserInfoHandler: (id: string, dispatchActionType: string) => void;
  setPhotoHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  submitHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  closeModalHandler(): void;
  resetStateHandler(): void;
};

export type printControlProps = {
  cvPrintRef: React.RefObject<HTMLElement>;
};

// reducer actions
export type ACTIONS = {
  type:
    | 'ADD_EXPERIENCE'
    | 'ADD_EDUCATION'
    | 'SET_PHOTO'
    | 'OPEN_MODAL'
    | 'CLOSE_MODAL'
    | 'RESET_STATE';

  payload?: string | payloadStoreInputs;
};

type payloadStoreInputs = { name: string; value: string; id: string };

export type ACTIONSWITHPAYLOAD = {
  type:
    | 'STORE_PERSONAL_INFO'
    | 'STORE_EDUCATION_INFO'
    | 'STORE_EXPERIENCE_INFO'
    | 'DELETE_EDUCATION_INFO'
    | 'DELETE_EXPERIENCE_INFO';

  payload: string | payloadStoreInputs;
};

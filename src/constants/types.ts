export type cvStructure = {
  personalInfo: {
    firstName: string;
    lastName: string;
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
  storeEducationInputHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
};

type payloadStoreInputs = { name: string; value: string; id: string };

export type ACTIONS = {
  type: 'ADD_EXPERIENCE' | 'ADD_EDUCATION' | 'STORE_EDUCATION_INFO';
  payload?: string | payloadStoreInputs;
};

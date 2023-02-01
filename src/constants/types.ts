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
    position: string;
    company: string;
    city: string;
    from: string;
    to: string;
  }[];

  education: {
    universityName: string;
    city: string;
    degree: string;
    subject: string;
    from: string;
    to: string;
  }[];
};

export type cvStructureAndMethods = cvStructure & {};

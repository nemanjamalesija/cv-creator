import React from 'react';
import { useGlobalContext } from '../context';

const PersonalInfo = () => {
  const {
    personalInfo: {
      firstName,
      lastName,
      title,
      adress,
      phoneNumber,
      email,
      description,
    },
    storeInputsHandler,
  } = useGlobalContext();

  return (
    <section className="section personal-info-section">
      <h3 className="heading-section">Personal information</h3>
      <div className="form-control">
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => storeInputsHandler(e, '', 'STORE_PERSONAL_INFO')}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={(e) => storeInputsHandler(e, '', 'STORE_PERSONAL_INFO')}
        />
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => storeInputsHandler(e, '', 'STORE_PERSONAL_INFO')}
        />
        <input
          type="text"
          name="adress"
          value={adress}
          placeholder="Adress"
          onChange={(e) => storeInputsHandler(e, '', 'STORE_PERSONAL_INFO')}
        />
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          placeholder="Phone number"
          onChange={(e) => storeInputsHandler(e, '', 'STORE_PERSONAL_INFO')}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => storeInputsHandler(e, '', 'STORE_PERSONAL_INFO')}
        />
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={(e) => storeInputsHandler(e, '', 'STORE_PERSONAL_INFO')}
        />
      </div>
    </section>
  );
};

export default PersonalInfo;

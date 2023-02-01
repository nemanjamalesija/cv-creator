import React from 'react';
import { useGlobalContext } from '../context';

const FormPersonalInfo = () => {
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
  } = useGlobalContext();

  return (
    <section className="section personal-info-section">
      <h3 className="heading-section">Personal information</h3>
      <div className="form-control">
        <input type="text" name="firstName" value={firstName} />
        <input type="text" name="lastName" value={lastName} />
        <input type="text" name="title" value={title} />
        <input type="text" name="adress" value={adress} />
        <input type="text" name="phoneNumber" value={phoneNumber} />
        <input type="text" name="email" value={email} />
        <input type="text" name="description" value={description} />
      </div>
    </section>
  );
};

export default FormPersonalInfo;

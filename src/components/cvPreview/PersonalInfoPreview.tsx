import React from 'react';
import { useGlobalContext } from '../../context';
const userPhotoUnknown = require('../../constants/img-undefined.jpg') as string;

const PersonalInfoPreview = () => {
  const { personalInfo } = useGlobalContext();
  const {
    firstName,
    lastName,
    title,
    photo,
    adress,
    phoneNumber,
    email,
    description,
  } = personalInfo;
  return (
    <div className="photo-area">
      <img
        src={`${photo ? photo : userPhotoUnknown}`}
        className="photo-image"
      />
      <div className="photo-info">
        <h3 className="modal-heading">Personal Details</h3>
        <div className="photo-info-description">
          <div className="photo-info-block">
            <p className="info-top">Adress</p>
            <p className="info-bot">{adress}</p>
          </div>
          <div className="photo-info-block">
            <p className="info-top">Phone number</p>
            <p className="info-bot">{phoneNumber}</p>
          </div>
          <div className="photo-info-block">
            <p className="info-top">Email</p>
            <p className="info-bot">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoPreview;

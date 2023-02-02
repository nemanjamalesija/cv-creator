import React from 'react';
import { useGlobalContext } from '../../context';
import './cv.css';
const userPhotoUnknown = require('../../constants/img-undefined.jpg') as string;

const CvPreview = (props: any) => {
  const { personalInfo, education, experience, showModal } = useGlobalContext();
  const { cvPrintRef } = props;
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
    <section ref={cvPrintRef}>
      <div
        className={` ${
          showModal ? 'modal-container' : 'modal-container hidden'
        }`}
      >
        <div className="modal-center">
          <header className="cv-header">
            <h1>
              {firstName} {lastName}
            </h1>
            <p className="personal-info-title">{title}</p>
          </header>
          <main className="cv-main">
            <div className="textual-data">
              <div className="description">
                <h3 className="modal-heading">Description</h3>
                <p className="description-paragraph">{description}</p>
              </div>
              <div className="info-component">
                <h3 className="modal-heading">Education</h3>
                <div className="info-container">
                  {education.map((edu) => {
                    const {
                      universityName,
                      city,
                      degree,
                      subject,
                      from,
                      to,
                      id,
                    } = edu;

                    return (
                      <div className="info-example" key={id}>
                        <p className="info-top">
                          {from} - {to}
                        </p>
                        <div className="info-description">
                          <p className="info-top">{degree}</p>
                          <p className="info-bot">{subject}</p>
                          <p className="info-bot">
                            {universityName}, {city}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="info-component">
                <h3 className="modal-heading">Experience</h3>
                <div className="info-container">
                  {experience.map((exp) => {
                    const { position, company, city, from, to, id } = exp;

                    return (
                      <div className="info-example" key={id}>
                        <p className="info-top">
                          {from} - {to}
                        </p>
                        <div className="info-description">
                          <p className="info-top">{position}</p>
                          <p className="info-bot">
                            {company}, {city}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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
          </main>
        </div>
      </div>
    </section>
  );
};

export default CvPreview;

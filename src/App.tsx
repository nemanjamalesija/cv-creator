import React from 'react';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import FormPersonalInfo from './components/FormPersonalInfo';
/* const user = require('./constants/img-undefined.jpg') as string; */

function App() {
  return (
    <div className="cv-container">
      <FormPersonalInfo />
      <FormExperience />
      <FormEducation />
    </div>
  );
}

export default App;

import React from 'react';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import PersonalInfo from './components/PersonalInfo';
import Headline from './components/Headline';
/* const user = require('./constants/img-undefined.jpg') as string; */

function App() {
  return (
    <div className="cv-container">
      <Headline />
      <main className="container-center">
        <PersonalInfo />
        <FormExperience />
        <FormEducation />
      </main>
    </div>
  );
}

export default App;

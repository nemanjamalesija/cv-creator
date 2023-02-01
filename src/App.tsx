import React from 'react';
import FormPersonalInfo from './components/FormPersonalInfo';
import { useGlobalContext } from './context';
/* const user = require('./constants/img-undefined.jpg') as string; */

function App() {
  const { personalInfo, experience, education } = useGlobalContext();

  return (
    <div className="cv-container">
      <FormPersonalInfo />
    </div>
  );
}

export default App;

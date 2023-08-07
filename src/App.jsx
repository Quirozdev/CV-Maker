import { useState } from 'react';
import CV from './components/CV';
import './App.css';
import GeneralInfoForm from './components/GeneralInfoForm';
import FormContainer from './components/FormContainer';
import EducationalExperiencesForm from './components/EducationalExperiencesForm';
import PracticalExperiencesForm from './components/PracticalExperienceForm';

function App() {
  // {name, email, phone}
  const [userGeneralInfo, setUserGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [educationalExperiences, setEducationalExperiences] = useState([]);
  const [practicalExperiences, setPracticalExperiences] = useState([]);

  function handleGeneralInfoFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    setUserGeneralInfo({ name, email, phone });
  }

  function handleEducationalExperienciesFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const schoolName = formData.get('school-name');
    const studyTitle = formData.get('study-title');
    const dateOfStudy = new Date(formData.get('date-of-study'));
    setEducationalExperiences([
      ...educationalExperiences,
      { schoolName, studyTitle, dateOfStudy },
    ]);
  }

  function handlePracticalExperiencesFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const companyName = formData.get('company-name');
    const positionTitle = formData.get('position-title');
    const responsibilities = formData.get('responsibilities');
    const dateFrom = new Date(formData.get('from'));
    const dateTo = new Date(formData.get('to'));
    setPracticalExperiences([
      ...practicalExperiences,
      { companyName, positionTitle, responsibilities, dateFrom, dateTo },
    ]);
  }

  return (
    <>
      <FormContainer title="General Info">
        <GeneralInfoForm onFormSubmit={handleGeneralInfoFormSubmit} />
      </FormContainer>
      <FormContainer title="Educational experiences">
        <EducationalExperiencesForm
          onFormSubmit={handleEducationalExperienciesFormSubmit}
        />
      </FormContainer>
      <FormContainer title="Practical experience">
        <PracticalExperiencesForm
          onFormSubmit={handlePracticalExperiencesFormSubmit}
        ></PracticalExperiencesForm>
      </FormContainer>
      <CV
        userGeneralInfo={userGeneralInfo}
        educationalExperiences={educationalExperiences}
        practicalExperiences={practicalExperiences}
      />
    </>
  );
}

export default App;

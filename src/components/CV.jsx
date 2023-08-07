import { Fragment } from 'react';

export default function CV({
  userGeneralInfo,
  educationalExperiences,
  practicalExperiences,
}) {
  function sortEducationalExperiencesByDate(educationalExperiences) {
    return [...educationalExperiences].sort((a, b) => {
      return a.dateOfStudy.getTime() - b.dateOfStudy.getTime();
    });
  }

  return (
    <>
      <p>{userGeneralInfo.name}</p>
      <p>{userGeneralInfo.email}</p>
      <p>{userGeneralInfo.phone}</p>
      <hr />
      {sortEducationalExperiencesByDate(educationalExperiences).map(
        (educationalExperience, index) => {
          return (
            <Fragment key={index}>
              <p>{educationalExperience.schoolName}</p>
              <p>{educationalExperience.studyTitle}</p>
              <p>{educationalExperience.dateOfStudy.toString()}</p>
            </Fragment>
          );
        }
      )}
      <hr />
      {practicalExperiences.map((practicalExperience, index) => {
        return (
          <Fragment key={index}>
            <p>{practicalExperience.companyName}</p>
            <p>{practicalExperience.positionTitle}</p>
            <p>{practicalExperience.responsibilities}</p>
            <p>{practicalExperience.dateFrom.toString()}</p>
            <p>{practicalExperience.dateTo.toString()}</p>
          </Fragment>
        );
      })}
    </>
  );
}

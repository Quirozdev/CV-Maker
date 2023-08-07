export default function EducationalExperiencesForm({ onFormSubmit }) {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="school-name">School name</label>
      <input
        type="text"
        id="school-name"
        name="school-name"
      />
      <label htmlFor="study-title">Study title</label>
      <input
        type="text"
        id="study-title"
        name="study-title"
      />
      <label htmlFor="date-of-study">Date of study</label>
      <input
        type="date"
        id="date-of-study"
        name="date-of-study"
      />
      <button type="submit">Save</button>
    </form>
  );
}

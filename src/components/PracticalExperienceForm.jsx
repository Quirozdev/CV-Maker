export default function PracticalExperiencesForm({ onFormSubmit }) {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="company-name">Company name</label>
      <input
        type="text"
        id="company-name"
        name="company-name"
      />
      <label htmlFor="position-title">Position title</label>
      <input
        type="text"
        id="position-title"
        name="position-title"
      />
      <label htmlFor="responsibilities">Main responsibilities</label>
      <textarea
        name="responsibilities"
        id="responsibilities"
      ></textarea>
      <label htmlFor="date-from">From</label>
      <input
        type="date"
        name="date-from"
        id="date-from"
      />
      <label htmlFor="date-to">To</label>
      <input
        type="date"
        name="date-to"
        id="date-to"
      />
      <button type="submit">Save</button>
    </form>
  );
}

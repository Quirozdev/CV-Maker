import { useState } from 'react';
import '../styles/FormContainer.css';

export default function FormContainer({ title, children }) {
  const [showFormInputs, setShowFormInputs] = useState(false);

  function handleShowInputs() {
    setShowFormInputs(!showFormInputs);
  }

  return (
    <section className="form-container">
      <div className="title-toggle-show-btn-container">
        <h2>{title}</h2>
        <button onClick={handleShowInputs}>
          {showFormInputs ? 'Hide' : 'Show'}
        </button>
      </div>
      {showFormInputs && children}
    </section>
  );
}

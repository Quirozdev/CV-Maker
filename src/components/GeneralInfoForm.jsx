import { useState } from 'react';

export default function GeneralInfoForm({ onFormSubmit }) {
  const [name, setName] = useState('');

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
      />
      <button type="submit">Save</button>
    </form>
  );
}

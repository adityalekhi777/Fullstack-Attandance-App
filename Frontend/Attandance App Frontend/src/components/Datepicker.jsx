import React, { useState } from 'react';

function Datepicker({ setDate }) {
  const [localDate, setLocalDate] = useState('');

  const handleSelectDate = () => {
    if (!localDate) {
      alert('Please choose a date first.');
      return;
    }
    setDate(localDate); // Pass selected date to parent
  };

  return (
    <div className='datepicker'>
      <h1>Select a date</h1>
      <input
        type='date'
        value={localDate}
        onChange={(e) => setLocalDate(e.target.value)}
      />
      <button onClick={handleSelectDate}>Select Date</button>
    </div>
  );
}

export default Datepicker;

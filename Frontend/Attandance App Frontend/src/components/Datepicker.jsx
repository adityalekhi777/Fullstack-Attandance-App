import React, { useState } from 'react';

function Datepicker() {
  const [date, setDate] = useState(null);

  console.log(date);
  return (
    <div className='datepicker'>
      <h1>Select a date</h1>

      <input
        type='date'
        name='date'
        onChange={(e) => setDate(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

export default Datepicker;

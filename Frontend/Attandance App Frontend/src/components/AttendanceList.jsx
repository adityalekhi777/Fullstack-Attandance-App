import React from 'react';
import namesObject from '../Names.json';

export default function AttendanceList() {
  return (
    <div className="attendance-container">
      <h1>Attendance List</h1>
      <div>
        {namesObject.names.map((item, idx) => {
          return (
            <div key={idx} className="attendance-entry">
              <span> {item.name}</span>
              <label>
                Absent
                <input type='radio' />
              </label>
              <label>
                Present
                <input type='radio' />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

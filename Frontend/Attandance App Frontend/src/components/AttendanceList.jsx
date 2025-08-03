import React, { useEffect, useState } from 'react';
import namesObject from '../Names.json';

export default function AttendanceList({ selectedDate }) {
  const [attendance, setAttendance] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Fetch attendance when date changes
  useEffect(() => {
    if (!selectedDate) return;

    fetch(`http://localhost:3000/api/attendance/${selectedDate}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const fetchedAttendance = {};
          data.forEach(entry => {
            fetchedAttendance[entry.name] = entry.status ? 'present' : 'absent';
          });
          setAttendance(fetchedAttendance);
          setIsSubmitted(true);
        } else {
          setAttendance({});
          setIsSubmitted(false);
        }
      })
      .catch(err => console.error('Fetch error:', err));
  }, [selectedDate]);

  const handleChange = (name, value) => {
    setAttendance(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMarkAttendance = async () => {
    setError('');
    const allMarked = namesObject.names.every(({ name }) => attendance[name]);
    if (!allMarked) {
      setError('Please mark attendance for all students before submitting.');
      return;
    }

    try {
      for (const [name, status] of Object.entries(attendance)) {
        await fetch('http://localhost:3000/api/attendance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            date: selectedDate,
            status: status === 'present',
          }),
        });
      }
      setIsSubmitted(true);
    } catch (err) {
      setError('Attendance already submitted or server error.');
      console.error(err);
    }
  };

  return (
    <div className="attendance-container">
      <h1>Attendance List</h1>
      <button onClick={handleMarkAttendance} disabled={isSubmitted}>
        Mark Attendance
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {namesObject.names.map(({ name }, idx) => (
        <div key={idx} className="attendance-entry">
          <span>{name}</span>

          {isSubmitted ? (
            <span style={{ marginLeft: '10px' }}>
              {attendance[name] === 'present' ? '✅' : '❌'}
            </span>
          ) : (
            <>
              <label>
                Absent
                <input
                  type="radio"
                  name={`status-${name}`}
                  value="absent"
                  checked={attendance[name] === 'absent'}
                  onChange={() => handleChange(name, 'absent')}
                  required
                />
              </label>
              <label>
                Present
                <input
                  type="radio"
                  name={`status-${name}`}
                  value="present"
                  checked={attendance[name] === 'present'}
                  onChange={() => handleChange(name, 'present')}
                  required
                />
              </label>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

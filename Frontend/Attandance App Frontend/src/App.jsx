import React, { useState } from 'react';
import AttendanceList from './components/AttendanceList';
import Datepicker from './components/Datepicker';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <Datepicker setDate={setSelectedDate} />
      {selectedDate && <AttendanceList selectedDate={selectedDate} />}
    </>
  );
}
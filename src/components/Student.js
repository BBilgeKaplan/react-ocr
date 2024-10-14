import React, { useState } from 'react';

const Student = ({ onStudentNumberChange }) => {
  const [studentNumber, setStudentNumber] = useState('');

  const handleChange = (e) => {
    setStudentNumber(e.target.value);
    onStudentNumberChange(e.target.value); 
  };

  return (
    <div className="student">
      <label htmlFor="studentNumber">Öğrenci Numarası:</label>
      <input
        type="text"
        id="studentNumber"
        value={studentNumber}
        onChange={handleChange}
        placeholder="Öğrenci Numarası Girin"
        className="student-input"
      />
    </div>
  );
};

export default Student;

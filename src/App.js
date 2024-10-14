import './App.css';
import React, { useState } from 'react';
import Student from './components/Student';
import Question from './components/Question';
import OCR from './components/OCR';
import CriteriaList from './components/CriteriaList';
import QuestionEvaluation from './components/QuestionEvaluation';
import OverallEvaluation from './components/OverallEvaluation';

function App() {
  const [studentNumber, setStudentNumber] = useState('');
  const [questionDetails, setQuestionDetails] = useState({});
  const [criteriaList, setCriteriaList] = useState([]);
 

  const handleStudentNumberChange = (number) => {
    setStudentNumber(number);
    console.log('Student Number:', number); // Log the student number or handle it as needed
  };
  
  const handleQuestionChange = (questionData) => {
    setQuestionDetails(questionData);
    console.log('Question Data:', questionData);
  };

  const handleCriteriaChange = (newCriteria) => {
    setCriteriaList(newCriteria);
    console.log('Criteria List:', newCriteria);
  };

  return (
    <div className="App">
      <div className="container">

        <Student onStudentNumberChange={handleStudentNumberChange} />

        <Question onQuestionChange={handleQuestionChange} />

        <OCR/>

        <CriteriaList onCriteriaChange={handleCriteriaChange} />

        <QuestionEvaluation/>

        <OverallEvaluation/>

        </div>
    </div>

    

  );
}

export default App;

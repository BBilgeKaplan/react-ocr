// Sorunun, cevabının ve soru puanının girişini oluşturan component

import React, { useState } from 'react';

const Question = ({ onQuestionChange }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [value, setValue] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
    onQuestionChange({
      question: e.target.value,
      answer,
      value,
    });
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
    onQuestionChange({
      question,
      answer: e.target.value,
      value,
    });
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
    onQuestionChange({
      question,
      answer,
      value: e.target.value,
    });
  };

  return (
    <div className="question-input-section">
      <div className="question-input">
        <label htmlFor="question">Soru:</label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Soruyu Girin"
        />
      </div>

      <div className="value-input">
        <label htmlFor="value">Soru Değeri (Puan):</label>
        <input
          type="number"
          id="value"
          value={value}
          onChange={handleValueChange}
          placeholder="Puanı Girin"
        />
      </div>

      <div className="answer-input">
        <label htmlFor="answer">Cevap:</label>
        <input
          type="text"
          id="answer"
          value={answer}
          onChange={handleAnswerChange}
          placeholder="Cevabı Girin"
        />
      </div>
    </div>
  );
};

export default Question;

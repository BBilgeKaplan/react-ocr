import React, { useState } from 'react';

const CriteriaList = ({ onCriteriaChange }) => {
  const [criteriaList, setCriteriaList] = useState([]);
  const [newCriterion, setNewCriterion] = useState('');
  const [newValue, setNewValue] = useState('');
  

  const handleAddCriterion = () => {
    if (newCriterion && newValue) {
      const newCriteria = [...criteriaList, { criterion: newCriterion, value: newValue }];
      setCriteriaList(newCriteria);
      onCriteriaChange(newCriteria);
      setNewCriterion('');
      setNewValue('');
    } else {
      alert('Lütfen kriter ve puan değeri girin.');
    }
  };

  const handleCriterionChange = (e) => {
    setNewCriterion(e.target.value);
  };

  const handleValueChange = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <div className="criteria-component">
      <div className='new-criteria'>
      <div className="criteria-input">
        <label htmlFor="criterion">Kriter:</label>
        <input
          type="text"
          id="criterion"
          value={newCriterion}
          onChange={handleCriterionChange}
          placeholder="Kriter Girin"
        />
      </div>

      <div className="value-input">
        <label htmlFor="value">Puan Değeri:</label>
        <input
          type="number"
          id="value"
          value={newValue}
          onChange={handleValueChange}
          placeholder="Puan Değeri Girin"
        />
      </div>

      <div>
      <button onClick={handleAddCriterion}>Kriter Ekle</button>
      </div>
      

      </div>

      <div className="criteria-list">
        <h3>Kriter Listesi:</h3>
        <ul>
          {criteriaList.map((item, index) => (
            <li key={index}>
              {item.criterion} - {item.value} Puan
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CriteriaList;

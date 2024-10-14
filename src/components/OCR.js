import React, { useState } from 'react';
import axios from 'axios';

const OCR = () => {
    const [file, setFile] = useState(null);
    const [ocrMethod, setOcrMethod] = useState('GPT');
    const [result, setResult] = useState('');
  
    const handleFileChange = (e) => {
      setFile(e.target.files);
    };
  
    const handleMethodChange = (e) => {
      setOcrMethod(e.target.value);
    };
  
    const handleOcr = async () => {
      if (!file) {
        alert('Lütfen bir dosya seçin.');
        return;
      }
  
      const formData = new FormData();
      formData.append('file', file);
      formData.append('method', ocrMethod);
  
      try {
        const response = await axios.post('/api/ocr', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // OCR sonucunu result durumuna kaydeder
        setResult(response.data.result);
      } catch (error) {
        // Hata durumunda konsola loglar ve uyarı verir
        console.error('OCR işlemi başarısız:', error);
        alert('OCR işlemi sırasında bir hata oluştu.');
      }
    };
  
    return (
      <div className="ocr-component">
        <div className="file-input">
          <label htmlFor="file">Dosya Seçin:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
  
        <div className="method-select">
          <label htmlFor="method">OCR Metodu Seçin:</label>
          <select id="method" value={ocrMethod} onChange={handleMethodChange}>
            <option value="GPT">GPT</option>
            <option value="Gemini">Gemini</option>
          </select>
        </div>
  
        <div className="ocr-button">
        <button onClick={handleOcr}>OCR YAP</button>
        </div>

        
        <div className="ocr-result">
          <h3>OCR Sonucu:</h3>
          <textarea value={result} readOnly rows="10" cols="50" />
        </div>
        
      </div>
    );
  };
  
  export default OCR;
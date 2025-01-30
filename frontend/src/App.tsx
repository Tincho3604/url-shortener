import './App.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [url, setUrl] = useState('');
  const handleUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;          
    setUrl(value);
  };

  const sendUrl = async () => {
    if (url !== '') {
      try {
        const response = await axios.post(`http://localhost:3000/short-url`, { url: url });
        console.log('Respuesta recibida:', response.data);
      } catch (error) {
        console.log('Error al hacer la solicitud:', error);
      }
    }
  };

  return (
    <div className='main-cotainer'>
      <h1>URL Shortener</h1>
      <div className='main-background-input'>
        <input placeholder='https://vercel.com/' onChange={(e) => handleUrl(e)}/>
        <button>
          <FontAwesomeIcon icon={faLink} onClick={()=> sendUrl()}/>
        </button>
      </div>
    </div>
  )
}

export default App

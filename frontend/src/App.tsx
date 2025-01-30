import './App.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {

  const [url, setUrl] = useState('');

  const handleUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
      
    const { value } = e.target;          

    setUrl(value);
  };

  return (
    <div className='main-cotainer'>
      <h1>URL Shortener</h1>
      <div className='main-background-input'>
        <input placeholder='https://vercel.com/' onChange={(e) => handleUrl(e)}/>
        <button>
          <FontAwesomeIcon icon={faLink} onClick={()=> alert(url)}/>
        </button>
      </div>
    </div>
  )
}

export default App

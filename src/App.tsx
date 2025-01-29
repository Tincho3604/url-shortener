import './App.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {

  const [url, setUrl] = useState('');

  const handleUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);     
    // const {} = e.target;          
  };

  return (
    <div className='main-background'>
      <input placeholder='https://www.google.com/' onChange={(e) => handleUrl(e)}/>
      <button >
        <FontAwesomeIcon icon={faLink} onClick={()=> setUrl(url)}/>
      </button>
    </div>
  )
}

export default App

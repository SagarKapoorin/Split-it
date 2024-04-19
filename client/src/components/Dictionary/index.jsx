import React, { useState } from 'react';
import './dict.css';
import { useTheme } from '@emotion/react';
const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [word, setWord] = useState('--');
  const [phonetics, setPhonetics] = useState('--');
  const [definitions, setDefinitions] = useState([]);
  const theme=useTheme();
  const background=theme.palette.background.default;
  const light=theme.palette.neutral.dark;
  const search = async () => {
    let input = searchTerm.trim();
   
    if (input !== '') {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
        const data = await response.json();
        // console.log(data);
        if (!data.title) {
          setWord(data[0].word);
          setPhonetics(data[0].phonetics[0].text);
          const meanings = data[0].meanings.map(meaning => ({
            partOfSpeech: meaning.partOfSpeech,
            definiti: meaning.definitions[0].definition
          }));
          setDefinitions(meanings);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      setWord('--');
      setPhonetics('--');
      setDefinitions([]);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    search();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <div id="main-container">
      <input 
        type="text" 
        id="search" 
        value={searchTerm} 
        onChange={handleInputChange} 
        onKeyPress={handleKeyPress}
        placeholder="Search"
      />
      <button  style={{backgroundColor:`${background}`, border:`1px solid ${light}`,padding:'4px',borderRadius:'10px',cursor:'pointer'}} onClick={handleSearch}>Search</button>
      <h1 id="word">{word}</h1>
      <p id="phonetics">{phonetics}</p>
      <div id="definition-container">
        {definitions.map((meaning, index) => (
          <div key={index} className="meaning-container">
            <h4>{meaning.partOfSpeech}</h4>
            <p style={{color:`${light}`}}>{meaning.definiti}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dictionary;

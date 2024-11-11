import React from 'react';
import { useSelector } from 'react-redux';
import './Character.css';

const Character = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <div className="character-container">
      {characters.length > 0 ? (
        characters.map((character, index) => (
          <div key={index} className="character-card">
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ))
      ) : (
        <p>No character data available.</p>
      )}
    </div>
  );
};

export default Character;


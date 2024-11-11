import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharacter } from '../redux/actions';
import './CharacterList.css';

const CharacterList = () => {
  const dispatch = useDispatch();
  const [characterId, setCharacterId] = useState('');

  const handleGetInfo = () => {
    if (characterId) {
      dispatch(fetchCharacter(characterId));
      setCharacterId(''); 
    }
  };

  return (
    <div className="character-list-container">
      <input
        type="text"
        placeholder="Enter character ID (1-5)"
        value={characterId}
        onChange={(e) => setCharacterId(e.target.value)}
      />
      <button onClick={handleGetInfo}>Get Info</button>
    </div>
  );
};

export default CharacterList;


import React from 'react';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>SWAPI Character Info</h1>
      <CharacterList />
      <Character />
      <Footer />
    </div>
  );
}

export default App;



import React from 'react';
import { readFromFile } from './readLyrics.js';

const Song: React.FC = () => {
  const songFile = require("../data/creature_fr.txt");
  const lyrics = readFromFile(songFile);

  return (
    <div className="song">
      <h2>Créature</h2>
      <p>{lyrics}</p>
    </div>
  );
}

export default Song;

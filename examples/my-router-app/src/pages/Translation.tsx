import React from 'react';
import { readFromFile } from './readLyrics.js';

const Translation: React.FC = () => {
  const translationFile = require("../data/creature_nl.txt");
  const lyrics = readFromFile(translationFile);

  return (
    <div className="translation">
      <h2>Ding</h2>
      <p>{lyrics}</p>
    </div>
  );
}

export default Translation;
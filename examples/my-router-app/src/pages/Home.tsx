import React from 'react';
// https://bobbyhadz.com/blog/typescript-import-use-fs-module
import * as fs from 'fs';
import * as path from 'path';

interface Artist {
  name: string;
  country: string;
  languages: string;
}

const filePath = path.join("../data", "creature_fr.txt");

const Home: React.FC = () => {

  let artistInfo = null;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
    }
    try {
      const { name, languages, country } = JSON.parse(data) as Artist;

      artistInfo = 
      <div className="home">
        <h2>{name}</h2>
        <p>`Singer ${name} lives in ${country} and speaks ${languages}`</p>
      </div>

    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
    
  });

  return artistInfo;

}  

export default Home;

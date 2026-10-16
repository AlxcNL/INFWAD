import * as fs from 'fs';
const filePath = '../data/creature_nl.txt';
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

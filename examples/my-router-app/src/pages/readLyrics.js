import React from 'react';

export function readFromFile(translationFile) {
  const [text, setText] = React.useState();
  fetch(translationFile)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent);
    });
  return text || "Loading...";
}

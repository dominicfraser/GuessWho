import React from 'react';
import ReactDOM from 'react-dom';

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(<h1> Running </h1>, targetDiv);
});

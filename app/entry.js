import React from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';

import Puzzle from './components/Puzzle';

axios.get('/puzzle/Apr01-2018.json').then(response => {
  ReactDOM.render(<Puzzle {...response.data} />, document.getElementById('puzzle'));
}).catch(error => {
  console.log(error)
});
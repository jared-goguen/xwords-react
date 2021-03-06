import React from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';
import style from './style';

import Puzzle from './components/Puzzle';



axios.get('/puzzle/Apr08-2018.json').then(response => {
  ReactDOM.render(<Puzzle {...response.data} />, document.getElementById('puzzle'));
}).catch(error => {
  console.log(error)
});
import React from 'react'
import ReactDOM from 'react-dom'

const name = "Lamia";
const curDate = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>My name is {name}</h1>
    <p>Current Date: {curDate}</p>
    <p>Current Time: {curTime}</p>
  </>,
  document.getElementById('root')

);
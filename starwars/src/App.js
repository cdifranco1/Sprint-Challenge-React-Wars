import React, { useState, useEffect } from 'react';
import axios from "axios";
import CardContainer from './components/CardContainer';
import './App.css';

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios("https://swapi.co/api/people/")
    .then(res => { 
      setData(res.data.results)
      console.log(res)})
  }, [])


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer people={data}/>
    </div>
  );
}

export default App;

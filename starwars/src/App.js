import React, { useState, useEffect } from 'react';
import axios from "axios";
import CardContainer from './components/CardContainer';
import SearchBar from "./components/SearchBar";
import './App.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios("https://swapi.co/api/people/")
    .then(res => { 
      setData(res.data.results)
      console.log(res)})
  }, [])

  const searchHandler = (e) => {
    setSearchTerm(e.target.value)
  };

  return (
    <div className="container">
      <h1 className="Header">React Wars</h1>
      <SearchBar 
        value={searchTerm}
        onChange={searchHandler}
      />
      <CardContainer 
        people={data}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;

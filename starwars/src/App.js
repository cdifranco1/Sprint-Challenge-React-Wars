import React, { useState, useEffect } from 'react';
import axios from "axios";
import CardContainer from './components/CardContainer';
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios(`https://swapi.co/api/people/?page=${page}`)
    .then(res => { 
      setData(res.data.results)
      console.log(res)})
  }, [page])

  const searchHandler = (e) => {
    setSearchTerm(e.target.value)
  };

  const pageHandler = (e) => {
    console.log(e.target.value)
    if (e.target.value == "next") {
      setPage(page + 1)
      e.preventDefault()
    } else {
      setPage(page - 1)
      e.preventDefault();
    }
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
      <Pagination 
        onClick={pageHandler}
        value={{next: "next",
                previous: "previous"}}
      />
    </div>
  );
}

export default App;

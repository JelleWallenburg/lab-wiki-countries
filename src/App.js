import './App.css';
import countriesJSON from './countries.json'

import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

import { useEffect, useState } from 'react';

import { Routes, Route, useParams} from 'react-router-dom';


function App() {
  const [countryJSON, setCountryJSON]= useState(countriesJSON);

  useEffect(()=> {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then(response => {
      console.log('response',response)
      setCountryJSON(response.data)
      console.log('response',countryJSON)
    })
  },[])

  return (
    <div className="App">
      <Navbar />
     
      <Routes>
        <Route path="/" element= {<CountryList countryJSON={countryJSON}/>}/>
        <Route path="/projects/:id" element = {<CountryDetails useParams/>}/>
      </Routes>
    </div>
  );
}

export default App;

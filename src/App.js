import './App.css';
import countriesJSON from './countries.json'

import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

import { useState } from 'react';


function App() {
  const [countryJSON, setCountryJSON]= useState(countriesJSON);

  return (
    <div className="App">
      <Navbar />
      <CountryList countryJSON={countryJSON}/>
      <CountryDetails/>
    </div>
  );
}

export default App;

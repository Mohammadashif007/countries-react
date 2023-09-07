import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './LoadCountries.css'

const LoadCountries = () => {
    const [countries, setCountries] = useState([]);

    const loadCountriesData = () => {
     const url = 'https://restcountries.com/v3.1/all'
     fetch(url)
     .then(res => res.json())
     .then(data => setCountries(data))
   }

   useEffect(() => {
    loadCountriesData();
   },[])

    return (
        <div>
            <h1>Visiting Every Country over the world!!</h1>
            <h2>Available Countries : {countries.length}</h2>
            <div className='countries-container'>
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default LoadCountries;
import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../fetchAPI';
import './CountryPicker.css';


const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            setFetchedCountries(await fetchCountries());
        };
        return fetch();
    }, [setFetchedCountries])

    return (
        <div className="dropdown">
            <select onChange={(e) => handleCountryChange(e.target.value)} className=" select form-select form-select-sm" aria-label=".form-select-lg ">
                <option selected value="global" >Global</option>
                {fetchedCountries.map((country, index) => {
                    return <option key={index} value={country}>{country}</option>
                })
                }
            </select>
        </div>
    );
};

export default CountryPicker;
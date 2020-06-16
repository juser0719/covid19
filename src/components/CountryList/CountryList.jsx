import React, {useState, useEffect } from 'react';
import { NativeSelect , FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryList.module.css';

const CountryList = ({CountryChage}) => {
    const [fetchedCountries , setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, []);
    

    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => CountryChage(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};
 export default CountryList;
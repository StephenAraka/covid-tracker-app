import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ onChange }) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => setCountryList(await fetchCountries());
    fetchAPI();
  }, [setCountryList]);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => onChange(e.target.value)}>
          <option value="global">Global</option>
          {countryList.map((country, index) => <option key={index} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default CountryPicker;

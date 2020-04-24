import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => setCountryList(await fetchCountries());
    fetchAPI();
  }, [setCountryList]);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect>
          <option value="global">Global</option>
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default CountryPicker;

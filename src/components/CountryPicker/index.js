import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {
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

import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

export default class App extends Component {

  async componentDidMount() {
    const { data: { confirmed, recovered, deaths, lastUpdate} } = await fetchData();
    const modifiedData = { confirmed, recovered, deaths, lastUpdate }

    console.log(modifiedData);
    // return modifiedData;
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

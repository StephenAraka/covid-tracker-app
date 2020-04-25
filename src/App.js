import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import coronaImage from './assets/images/image.png';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const countryData = await fetchData(country);
    this.setState({ data: countryData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker onChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

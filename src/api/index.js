import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {

  }
} 

export const fetchDailyData = async () => {
  try {
    const { data } = await  axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => (
      {
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate
      }
    ));

    return modifiedData;
  } catch (error) {

  }
}

export const countries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    return data.countries;
  } catch (error) {
    
  }
}

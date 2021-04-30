import axios from './axios';

export const fetchData = async (country) => {
    let url = '';
    if (country) {
        url = `/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate }, } = await axios.get(url);
        console.log(confirmed);
        console.log(deaths);
        return {
            confirmed, recovered, deaths, lastUpdate
        };
    } catch (error) {
        console.log(error);
    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get('/daily');
        console.log(data);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    } catch (error) { }
};


export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get('/countries');
        console.log(countries);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
};

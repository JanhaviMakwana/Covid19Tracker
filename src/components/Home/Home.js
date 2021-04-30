import React from 'react';
import CountryPicker from '../CountryPicker';
import Cards from '../Cards/Cards';
import Chart from '../Charts/Chart';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchData } from '../../fetchAPI';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            country: '',
            data: {}
        }
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {

        if (country !== 'global') {
            const fetchedData = await fetchData(country);
            this.setState({ data: fetchedData, country: country });
        } else {
            const fetchedData = await fetchData();
            this.setState({ data: fetchedData, country: '' });
        }
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className="container mt-0">
                <div></div>
                <section>
                    <div className="container text-center py-5">
                        <h1 className="display-4">C<FontAwesomeIcon icon={faVirus} style={{ color: 'lightgreen' }} />vid-19 Tracker</h1>
                    </div>
                    <Cards data={data} country={country} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />
                </section>
            </div>
        );
    }
};

export default Home;
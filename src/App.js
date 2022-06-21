import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityList: [],
      cityData: {},
      error: false,
      errorMessage: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let cityInfo = await axios.get('https://us1.locationiq.com/v1/search.php');

      this.setState({
        cityList: cityInfo.data.results,
        error: false
      });
    } catch (error) {
      console.log('error: ', error)
      console.log('error.message: ', error.message);
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`
      });
    }
  };

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  handleCitySubmit = async (e) => {
    e.preventDefault();
    // make my request to my API
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(url);
    console.log(cityInfo.data[0]);
  }

  render() {
    return (
      <>
        <h1>Data from an API</h1>
        <form onSubmit={this.handleCitySubmit}>
          <label>Pick a City:
            <input type="text" onInput={this.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>
      </>
    );
  }
}

export default App;
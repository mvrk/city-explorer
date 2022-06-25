import React from 'react';
import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import Weather from './Weather.js';
import Movies from './Movies.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      city: '',
      cityData: {},
      cityMap: '',
      cityName: '',
      datetime: '',
      description: '',
      weatherData: [],
      error: false,
      moviesData: [],
      errorMessage: '',
      displayCity: false

    };
  }

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      searchQuery: '',
      // city: '',
      cityData: {},
      cityMap: '',
      cityName: '',
      datetime: '',
      description: '',
      weatherData: [],
      error: false,
      moviesData: [],
      errorMessage: '',
      displayCity: false
    })
    try {
      let url = `https://us1.locationiq.com/v1/search.php?
      key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&
      q=${this.state.city}&
      format=json`;

      let cityData = await axios.get(url);
      console.log(cityData.data[0]);
      this.setState({
        displayCity: true,
        cityData: cityData.data[0],
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,

        cityMap: `https://maps.locationiq.com/v3/staticmap?
        key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&
        center=${cityData.data[0].lat},${cityData.data[0].lon}&
        zoom=12`
      });

      this.handleGetWeather(cityData.data[0].lat, cityData.data[0].lon);
      this.handleGetMovie(this.state.city);
    }

    catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`
      });
    }
  };

  handleGetWeather = async (lat, lon) => {
    let url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`;

    try {
      let weatherData = await axios.get(url);
      console.log(weatherData.data);
      this.setState({
        weatherData: weatherData.data
      })

    }
    catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`
      });
    }
  }


  handleGetMovie = async () => {
    let url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`;

    try {
      let movieResponse = await axios.get(url);
      console.log(movieResponse.data);
      this.setState({
        moviesData: movieResponse.data
      })

    }
    catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`
      });
    }
  }

  render() {
    console.log(this.state.weatherData);
    return (
      <>
        <h1>Data from an API</h1>
        <form as='form' onSubmit={this.handleSubmit}>
          <label>Input a City:
            <input type="text" onInput={this.handleInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>
        {this.state.error && <p>{this.state.errorMessage}</p> }
        { this.state.displayCity ?
          <>
            <ul>
              <li>City: {this.state.cityData.display_name}</li>
              <li>Latitude: {this.state.cityData.lat}</li>
              <li>Longitude: {this.state.cityData.lon}</li>
            </ul>
            <img alt='' src={this.state.cityMap}></img>
            <Weather weatherData={this.state.weatherData} />
            {this.state.moviesData.length && <Movies moviesData={this.state.moviesData} />}
          </>
          : ''

        }
      </>
    );
  }
}

export default App;
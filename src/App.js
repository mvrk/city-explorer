import React from 'react';
import axios from 'axios';
// import Image from 'react-bootstrap/Image';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityList: [],
      cityData: {},
      cityMap: '',
      error: false,
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

    try {
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
       console.log('abcde');
       let cityData = await axios.get(url);
     
      this.setState({
        displayCity: true,
        cityData: cityData.data[0],
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=12`
      });

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`
      });
    }
  };



  render() {
    return (
      <>
        <h1>Data from an API</h1>
        <form as='form' onSubmit={this.handleSubmit}>
          <label>Input a City:
            <input type="text" onInput={this.handleInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>
        {this.state.error ? <p>{this.state.errorMessage}</p> : this.state.displayCity ?
          <>
            <ul>
              <li>City: {this.state.cityData.display_name}</li>
              <li>Latitude: {this.state.cityData.lat}</li>
              <li>Longitude: {this.state.cityData.lon}</li>
            </ul>
            <img alt='' src={this.state.cityMap}></img>
          </>
          :''
        }
      </>
    );
  }
}

export default App;
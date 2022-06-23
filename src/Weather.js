import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {

  render() {
    let weatherDisplay = this.props.datetimeWeather.map((display, index) => {
      return (
        (<Card.Text key={index}> Datetime:{display.datetime} Description:{display.description}</Card.Text>)
      )
    })
    return (
      <Card>
        {weatherDisplay}
      </Card>
    )
  }
}

export default Weather;
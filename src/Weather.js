import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
class Weather extends React.Component {

  render() {
    let displayWeather = this.props.weatherData.map((display, index) => {
      return (
        <Card.Text key={index}>
          <ListGroup variant="flush">
            <ListGroup.Item>{display.datetime}</ListGroup.Item>
            <ListGroup.Item>{display.description}</ListGroup.Item>
          </ListGroup>
        </Card.Text>
      )
    })
    return (<Card>{displayWeather}</Card>)
  }
}

export default Weather;
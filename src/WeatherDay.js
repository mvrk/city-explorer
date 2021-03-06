import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component {
  render() {
    let displayWeather = this.props.dayWeather.map((display, index) => {
      return (
        <Card.Text key={index}>
          <ListGroup variant="flush">
            <ListGroup.Item>{display.time}</ListGroup.Item>
            <ListGroup.Item>{display.forecast}</ListGroup.Item>
          </ListGroup>
        </Card.Text>
      )
    })
    return (<Card>{displayWeather}</Card>)
  }
}

export default WeatherDay;

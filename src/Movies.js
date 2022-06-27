import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {

  render() {
    let displayMovies = this.props.moviesData.map((display, index) => {
      return (
        <Card.Text key={index}>
          <ListGroup variant="flush">
            <ListGroup.Item>{display.title}</ListGroup.Item>
            <ListGroup.Item>{display.overview}</ListGroup.Item>
            <ListGroup.Item>{display.average_votes}</ListGroup.Item>
            <ListGroup.Item>{display.total_votes}</ListGroup.Item>
            <img
              src={display.image_url}
              className='img-thumbnail'
              alt=''
              style={{ maxWidth: '24rem' }}
            />
            <ListGroup.Item>{display.popularity}</ListGroup.Item>
            <ListGroup.Item>{display.released_on}</ListGroup.Item>
          <hr></hr>

        </ListGroup>
        </Card.Text >
      )
  })
  return(<Card> { displayMovies }</Card >)
  }
}

export default Movies;
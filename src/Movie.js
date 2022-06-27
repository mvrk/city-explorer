import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {
  render() {
    // let displayMovies = this.props.moviesData.map((display, index) => {
      return (
        <Card.Text key={this.props.index}>
          <ListGroup variant="flush">
            <ListGroup.Item>{this.props.display.title}</ListGroup.Item>
            <ListGroup.Item>{this.props.display.overview}</ListGroup.Item>
            <ListGroup.Item>{this.props.display.average_votes}</ListGroup.Item>
            <ListGroup.Item>{this.props.display.total_votes}</ListGroup.Item>
            <img
              src={this.props.display.image_url}
              className='img-thumbnail'
              alt='No img provided'
              style={{ maxWidth: '24rem' }}
            />
            <ListGroup.Item>{this.props.display.popularity}</ListGroup.Item>
            <ListGroup.Item>{this.props.display.released_on}</ListGroup.Item>
            <hr></hr>

          </ListGroup>
        </Card.Text >
      )
    // return (<Card> {displayMovies}</Card >)
  }
}

export default Movie;

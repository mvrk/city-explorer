import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import Movie from './Movie';
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
              alt='No img provided'
              style={{ maxWidth: '24rem' }}
            />
            <ListGroup.Item>{display.popularity}</ListGroup.Item>
            <ListGroup.Item>{display.released_on}</ListGroup.Item>
            <hr></hr>

          </ListGroup>
        </Card.Text >
        // {Movie} 
      )
    })
    return (<Card> {displayMovies}</Card >)
  
  }
}

export default Movies;
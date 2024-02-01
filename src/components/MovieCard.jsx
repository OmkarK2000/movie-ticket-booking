import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard = (movie) => {

  console.log(movie.movieList.show.image.medium)

  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={movie.movieList.show.image.medium} alt='image'/> */}
      {/* <Card.Body>
        <Card.Title>{movie.movieList.show.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> */}
    </Card>
  )
}

export default MovieCard
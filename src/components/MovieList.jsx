import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MovieList = ({ movieList }) => {

  //  console.log(movieList)


  return (
    <Container className="d-flex flex-wrap justify-content-evenly ">
      {
        movieList.map(movie => (
          <Card key={movie.show.id} style={{ width: '18rem' }} className="mt-4">
            {console.log(movie.show)}
            <Card.Img variant="top" src={movie.show.image.medium} alt="imag" />
            <Card.Body>
              <Card.Title>{movie.show.name}</Card.Title>
              <Card.Text>
                {/* <p className="grid gap-2"> {movie.show.genres}</p> */}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      }
    </Container>
  )
}

export default MovieList
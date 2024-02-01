import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movieList }) => {
  const navigate = useNavigate();
  return (
    <Container className="d-flex flex-wrap justify-content-evenly ">
      {movieList.map((movie) => (
        <Card key={movie.show.id} style={{ width: "18rem" }} className="mt-4">
          {console.log(movie.show)}
          <Card.Img variant="top" src={movie.show.image?.medium} alt="image" />
          <Card.Body>
            <Card.Title>{movie.show.name}</Card.Title>
            <Card.Text>
              {movie.show.genres}
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(`/movie-details/${movie.show.id}`)}
            >
              More details
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default MovieList;
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const MovieDetails = ({ movieList }) => {
  const { id } = useParams();
  const [form, setForm] = useState([{
    title : "",
    email : "",
    number : ""
}])
  const selectedMovie = movieList.find((movie) => movie.show.id == id);
  console.log(selectedMovie?.show);
  setForm([...form , {title : selectedMovie?.show.name}])

  const handleChange = (e) => {
    const {value, name} = e.target;
    setForm(
      [...form, {[name] : value} ]
    )
    console.log(form)
  }

  const handleClick = (name) => {

  }

  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <Card style={{ width: '52rem' }} className="mt-4 d-flex flex-row">
        <div>
          <Card.Img style={{ width: '16rem' }} variant="top" src={selectedMovie?.show?.image?.original} />
        </div>
        <div>
          <Card.Body>
            <Card.Title>{selectedMovie?.show.name}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Genres : {selectedMovie?.show?.genres}</ListGroup.Item>
              <ListGroup.Item>Language : {selectedMovie?.show?.language}</ListGroup.Item>
              <ListGroup.Item>rating : {selectedMovie?.show?.rating?.average}</ListGroup.Item>
            </ListGroup>
            <hr />
            <Card.Text>
              <b>Summary</b> <br />
              {selectedMovie?.show?.summary}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
      <hr />
      <Form className="border p-5">
        <h4>Fill form to book ticket</h4>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Movie name</Form.Label>
            <Form.Control type="text" name='title' readOnly  value={form.name} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="number" name="number" placeholder="Enter mobile number" value={form.number} onChange={handleChange}/>
          </Form.Group>
          <Button variant="outline-primary">Book ticket</Button>
        </Form>
    </Container>
  )
};

export default MovieDetails;

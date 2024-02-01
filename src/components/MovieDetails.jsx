import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
const MovieDetails = ({ movieList }) => {
  const { id } = useParams();
  
const [showDetails, setShowDetails] = useState({})

  const [form, setForm] = useState({
    title : "",
    email : "",
    number : ""
})

  const handleChange = (e) => {
    const {value, name} = e.target;
    setForm(
      {
        ...form,
        [name]:value
      }
    )
  }

const handleClick=()=>{
  localStorage.setItem('bookingDetails',JSON.stringify(form))
  setForm({
    title:showDetails.name,
    email:'',
    number:''
  })
}

  useEffect(()=>{
    const selectedMovie = (movieList.find((movie) => movie.show.id == id));
    setShowDetails({...selectedMovie?.show,summary:parse(`${selectedMovie?.show?.summary}`)})
    setForm({
      ...form,
      title:selectedMovie?.show?.name
    })

  },[movieList])


// console.log(showDetails)
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      
      <Card style={{ width: '52rem' }} className="mt-4 d-flex flex-row">
        <div>
          <Card.Img style={{ width: '16rem' }} variant="top" src={showDetails?.image?.original} />
        </div>
        <div>
          <Card.Body>
            <Card.Title>{showDetails?.name}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Genres : {showDetails?.genres}</ListGroup.Item>
              <ListGroup.Item>Language : {showDetails?.language}</ListGroup.Item>
              <ListGroup.Item>rating : {showDetails?.rating?.average}</ListGroup.Item>
            </ListGroup>
            <hr />
            <Card.Text>
              <b>Summary</b> <br />
              {showDetails?.summary}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
      <hr />
      <Form className="border p-5">
        <h4>Fill form to book ticket</h4>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Movie name</Form.Label>
            <Form.Control type="text" name='title' readOnly  value={form.title} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text" name="number" placeholder="Enter mobile number" value={form.number} onChange={handleChange}/>
          </Form.Group>
          <Button variant="outline-primary" onClick={handleClick}>Book ticket</Button>
      </Form>
    </Container>
  )
};

export default MovieDetails;

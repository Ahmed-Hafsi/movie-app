import { Navbar, Container, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
//import Movielogo from "./Components/Movielogo.jpg";
const Nav = ({ rating, handleRating, input, handleInput, handleIsOpen }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src="https://st2.depositphotos.com/3687485/9010/v/600/depositphotos_90102796-stock-illustration-cinema-film-clapper-board-vector.jpg"
              alt="reactbootstrap logo"
              width="30"
              height="30"
              style={{ paddingRight: "5px" , display: "flex" , justifyContent: "flex-start" }}
            />
           MOVIE APP
          </Navbar.Brand>
          <input
            placeholder="Search for a movie"
            value={input}
            onChange={handleInput}
          />
          <ReactStars
            count={5}
            value={rating}
            onChange={handleRating}
            size={32}
            activeColor="#ffd700"
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fa fa-star"></i>}
          />
          <Button onClick={handleIsOpen}>Add Movie</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Components/Nav";
import AddMovie from "./Components/AddMovie";
import MovieContainer from "./Components/MovieContainer";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      img: "https://fr.web.img6.acsta.net/pictures/17/01/16/14/04/517517.jpg",
      name: "La fureur du dragon",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
      name: "The good docteur",
      rating: 2,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
      name: "Iron Man 2",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://images-na.ssl-images-amazon.com/images/I/81BbPS82fnL._AC_SL1500_.jpg",
      name: "Taboo",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://upload.wikimedia.org/wikipedia/en/c/c7/Street_Dancer_3D_poster.jpg",
      name: "Street Dancer",
      rating: 3,
    },
    {
      id: Math.random(),
      img: "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      name: "Breaking bad",
      rating: 3,
    },
    {
      id: Math.random(),
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      rating: 1,
    },
  ]);

  const [input, setInput] = useState("");

  const [rating, setRating] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    img: "",
    name: "",
    rating: 1,
  });

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNewMovie = (e) => {
    if (e.target.name === "rating") {
      setNewMovie({ ...newMovie, [e.target.name]: +e.target.value });
    }
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAddMovie = () => {
    if (newMovie.rating >= 1 && newMovie.rating <= 5) {
      setMovies([...movies, newMovie]);
      handleIsOpen();
    }
    alert("Movie rating should be between 1 and 5.");
  };

  return (
    <div className="App">
      <Nav
        rating={rating}
        handleRating={handleRating}
        input={input}
        handleInput={handleInput}
        handleIsOpen={handleIsOpen}
      />
      <br />
      <br />
      <AddMovie
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
        newMovie={newMovie}
        handleNewMovie={handleNewMovie}
        handleAddMovie={handleAddMovie}
      />
      <MovieContainer movies={movies} rating={rating} input={input} />
    </div>
  );
}

export default App;

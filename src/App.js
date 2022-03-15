import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Components/Nav";
import AddMovie from "./Components/AddMovie";
import MovieContainer from "./Components/MovieContainer";

import "./App.css";
import MovieDescription from "./Components/MovieDescription";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      img: "https://fr.web.img6.acsta.net/pictures/17/01/16/14/04/517517.jpg",
      name: "La fureur du dragon",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=wEHcMk2pYM0",
      description:"Un des grands-maitres du Kung Fu meurt mystérieusement. Un de ses disciples; Chen-Chen décide de faire une enquête et découvre qu'il a été empoisonné par les adeptes d'une école rivale japonaise. Apprenant cela, Chen-Chen  venge son, maitre en tuant son assassin, mais il est tué a son tour sur les ordres du consul japonais. Chen-San, le frère de Chen-Chen, trouve qu'il est grand temps de s'occuper de cette affaire à son tour."
    },
    {
      id: Math.random(),
      img: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
      name: "The good docteur",
      rating: 2,
      trailer: "https://www.youtube.com/watch?v=Q9jgHNksqx4",
      description:"Un jeune chirurgien souffrant d’autisme et du syndrome du savant intègre les rangs d’un grand hôpital de Californie, où il met à profit ses dons extraordinaires pour la médecine afin de sauver des vies et de surmonter le scepticisme de ses collègues.",
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
      name: "Iron Man 2",
      rating: 5,
      trailer:"https://www.youtube.com/watch?v=LAjZIR0J91w",
      description:"Alors qu'il fait l'essai d'une arme de son invention en Afghanistan, le milliardaire Tony Stark est capturé par des insurgés qui le forcent à travailler pour eux. Mais à leur insu, le scientifique crée pour lui-même une armure superpuissante au moyen de laquelle il s'évade et rentre aux États-Unis."
    },
    {
      id: Math.random(),
      img: "https://images-na.ssl-images-amazon.com/images/I/81BbPS82fnL._AC_SL1500_.jpg",
      name: "Taboo",
      rating: 5,
      trailer:"https://www.youtube.com/watch?v=W1fiijqrKuc",
      description:"A new eight-part drama series executive produced by Tom Hardy alongside "
    },
    {
      id: Math.random(),
      img: "https://upload.wikimedia.org/wikipedia/en/c/c7/Street_Dancer_3D_poster.jpg",
      name: "Street Dancer",
      rating: 3,
      trailer:"https://www.youtube.com/watch?v=2Ym7LJv6L_c",
      description:"Gulshan Kumar And T-Series Present A T-Series Films Production In Association With Remo D’Souza Entertainment Pvt. Ltd. & Dance Film Company Ltd. Uk, Bhushan Kumar’s Street Dancer 3D Official Trailer. The film is starring Varun Dhawan, Shraddha Kapoor, Nora Fatehi, and Prabhu Deva in lead roles and directed by Remo D'Souza, produced by Bhushan Kumar, Divya Khosla Kumar, Krishan Kumar & Lizelle D’Souza."
    },
    {
      id: Math.random(),
      img: "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      name: "Breaking bad",
      rating: 3,
      trailer:"https://www.youtube.com/watch?v=SMtJgdXj9U0",
      description:"full new action movie 2021",
    },
    {
      id: Math.random(),
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      rating: 1,
      trailer:"https://www.youtube.com/watch?v=ItM02RNWu_k",
      description:"fulle action movie "
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
    <Router>
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
      <Switch>
      <Route path ="/MovieDescription/:id">
       <MovieDescription movies={movies}/>
      </Route>
      <Route path="/">
      <MovieContainer movies={movies} rating={rating} input={input} />
    <AddMovie
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
        newMovie={newMovie}
        handleNewMovie={handleNewMovie}
        handleAddMovie={handleAddMovie}
      />
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;

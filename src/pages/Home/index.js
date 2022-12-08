import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import CardHome from '../../components/CardHome/CardHome';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 4,
  },
  card: {
    maxWidth: "450px",
    margin: theme.spacing(2),
    transitions: "all 0.3s",
    "&:hover": { transform: "scale(1.1)" },
    padding: 20,
  },
  Grid: {
    background: "#fff",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("?s=Batman&page=2&apikey=");
  const [querySearched, setQuerySearch] = useState(true);
  const [keySearched, setKeySearched] = useState("");
  const API_URL = "https://www.omdbapi.com/";
  const API_KEY = "d08082f7";

  var searchQuery = searchParams.get("Query");
  if (
    searchQuery !== "" &&
    searchQuery !== undefined &&
    searchQuery !== null &&
    querySearched !== false &&
    keySearched !== query
  ) {
    setQuery(`?s=${searchQuery}&apikey=`);
    setQuerySearch(false);
    setKeySearched(searchQuery);
  }
  
  useEffect(() => {
    axios.get(`${API_URL}${query}${API_KEY}`).then((response) => {
      setQuerySearch(true);
    });
  }, [query]);
  useEffect(() => {
    axios.get(`${API_URL}${query}${API_KEY}`).then((response) => {
      setMovies(response.data.Search);
      setQuerySearch(true);
      
    });
  }, []);

  return (
    <Container>
      <Grid container>
        {movies.map((item) => (
          <Grid item xs={12} md={3} className={classes.card} key={item.imdbID}>
            <CardHome
              Poster={item.Poster}
              Title={item.Title}
              Year={item.Year}
              imdbID={item.imdbID}
              key={item.key}
            >
              <Typography variant="h6" component="h2" color="primary">
                {item.Title}
              </Typography>
              <Typography variant="h5" component="h2">
                {item.Year}
              </Typography>
              <Link to={`/details/${item.imdbID}`}>
                {" "}
                <img src={item.Poster} alt="capa" />
              </Link>
            </CardHome>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

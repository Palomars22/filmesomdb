
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
    padding: 10,
    margin: '20px auto',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 500,
    width: 500,
  },
  card: {
    margin: theme.spacing(2),
  },
}));
const Details = () => {
  const classes = useStyles();

  const [movies, setMovies] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${id}&apikey=d08082f7`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [id]);

  return (
    <Container>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            key={movies.Title}
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="h1"
          ></Typography>
          <Typography variant="h5" component="h2">
            {movies.Title}
          </Typography>
          <CardMedia
            className={classes.media}
            image={`${movies.Poster}`}
            title={movies.Title}
          />
          <Typography className={classes.pos} color="textSecondary">
            {movies.Plot}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {movies.Actors}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {movies.Genre} <br />
            {movies.Released}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/">
            <ArrowBackIcon color="primary" style={{ fontSize: 40 }} />
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Details;

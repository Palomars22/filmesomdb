import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: theme.palette.secondary.main,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    "&:hover": {},
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    color: "secondary",
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search)return    

    navigate(`/search?Query=${search}`);
    window.location.reload();
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h3"
            noWrap
            align="center"
          >
            API Filmes 2022
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Buscar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={handleSubmit}
            >
              Buscar
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

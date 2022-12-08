import './index.css';

import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Header from './components/Header';
import Details from './pages/Details';
import Erro from './pages/Erro/index.js';
import Home from './pages/Home';


const theme= createTheme({
  palette:{
    primary: {
      main: '#004e98',
    },
    secondary:{
      main:'#fff',
      text:'#004d7a',
    },
    
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
     <ThemeProvider theme={theme}>
    <Header />
    <Routes>
      <Route>
        <Route exact path='/' element={<App />} />
        <Route exact path='/details/:id' element={<Details />} />
        <Route exact path='/search' element={<Home />} />
        <Route path='*' element={<Erro />} />
      </Route>
    </Routes>
    </ThemeProvider>
  </BrowserRouter>
);



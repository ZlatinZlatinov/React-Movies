import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './static/css/style.css';
//import './static/css/plugins.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import { MainView } from './components/MainView';
import { LoginComponent } from './components/Login';
import { RegisterComponent } from './components/Register';
import { MovieList } from './components/MovieList';



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainView />}></Route>
        {/* <Route path="/about" element={<AboutPage />} />*/}
        <Route path="/catalog" element={<MovieList />} />
        <Route path="/login" element={<LoginComponent />} /> 
        <Route path="/register" element={<RegisterComponent />} />
        {/*<Route path='/details/:movieId' element={<Movie />}></Route>
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

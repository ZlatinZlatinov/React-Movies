import { Route, Routes } from 'react-router-dom';

import './static/css/style.css';

import Header from "./components/Header";
import Footer from './components/Footer';
//import { MainView } from './components/MainView';
import { LoginComponent } from './components/Login';
import { RegisterComponent } from './components/Register';
import { MovieList } from './components/MovieList';
import { MovieDetails } from './components/MovieDetails';
import { NotFound } from './components/NotFound';
import { PreventLoggedUser } from './components/PreventLoggedUser';
import { About } from './components/About';
import { MovieSlider } from './components/MovieSlider'; // In order to use this component just uncomment it and replace it with 
// Main view component on route path='/' 



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MovieSlider />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<MovieList />} />
        <Route element={<PreventLoggedUser />}>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Route>
        <Route path='/details/:movieId' element={<MovieDetails />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

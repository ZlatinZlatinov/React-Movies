import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Addverrtisement } from './Advertisement';
import { CreateForm } from './CreateForm';
import { useIsAuthenticated } from 'react-auth-kit';
import { SearchMovie } from './searchMovieComponent';

const url = 'http://localhost:3030/data/movies';

export function MovieList() {
    //const url = 'http://localhost:3030/data/movies'; 
    const isAuthenticated = useIsAuthenticated();
    const isAuth = isAuthenticated();
    const [moveis, setMovies] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(m => setMovies(m))
            .catch(err => setMovies([]))
    }, []);

    return (
        <>
            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1> movie listing</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single movie_list">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="topbar-filter">
                                <p>Found <span>{moveis.length}</span> in total</p>
                                <label>Sort by:</label>
                                <select>
                                    <option value="popularity">Popularity Descending</option>
                                    <option value="popularity">Popularity Ascending</option>
                                    <option value="rating">Rating Descending</option>
                                    <option value="rating">Rating Ascending</option>
                                    <option value="date">Release date Descending</option>
                                    <option value="date">Release date Ascending</option>
                                </select>
                                <a href="movielist.html" className="list"><i className="ion-ios-list-outline active"></i></a>
                                <a href="moviegrid.html" className="grid"><i className="ion-grid"></i></a>
                            </div>

                            {moveis.map((m) => {
                                return (
                                    <div className="movie-item-style-2" key={m._id}>
                                        <img src={m.img} alt="None" />
                                        <div className="mv-item-infor">
                                            <h6><Link to={`/details/${m._id}`}>{m.title}</Link></h6>
                                            <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
                                            <p className="describe">{m.description}</p>
                                            <p className="run-time"> Created on:<span>{m._createdOn}</span></p>
                                            <p>Title: <span>{m.title}</span></p>

                                        </div>
                                    </div>
                                );
                            })}

                            <div className="topbar-filter">
                                <label>Movies per page:</label>
                                <select>
                                    <option value="range">5 Movies</option>
                                    <option value="saab">10 Movies</option>
                                </select>
                                <div className="pagination2">
                                    <span>Page 1 of 2:</span>
                                    <a className="active" href="/">1</a>
                                    <a href="/">2</a>
                                    <a href="/"><i className="ion-arrow-right-b"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <SearchMovie />
                                {isAuth ? <CreateForm setMovies={setMovies} /> : <Addverrtisement />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
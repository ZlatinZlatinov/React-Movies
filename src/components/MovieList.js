import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Advertisement } from './Advertisement';
import { CreateForm } from './CreateForm';
import { useIsAuthenticated } from 'react-auth-kit';
import { SearchMovie } from './searchMovieComponent';

const url = 'http://localhost:3030/data/movies';

export function MovieList() {
    //const url = 'http://localhost:3030/data/movies'; 
    const isAuthenticated = useIsAuthenticated();
    const isAuth = isAuthenticated();
    const [moveis, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(m => {
                setMovies(m);
                const pages = Math.ceil(m.length / 5);
                setPageCount(pages);
            })
            .catch(err => setMovies([]))
    }, []);

    const arr = [1];

    for (let x = 2; x <= pageCount; x++) {
        arr.push(x);
    }

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
                                <p style={{fontSize: '13pt'}}>Found <span>{moveis.length}</span> in total</p>
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
                                    <span>Page 1 of {pageCount}:</span>
                                    {arr.map((num, i) => (
                                        <a href='/' key={i}>{num}</a>
                                    ))}
                                    <a href="/"><i className="ion-arrow-right-b"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <SearchMovie setMovies={setMovies} />
                                {isAuth ? <CreateForm setMovies={setMovies} /> : <Advertisement />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
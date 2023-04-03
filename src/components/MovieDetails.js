import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import add from '../static/images/uploads/ads1.png';
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import { EditComponent } from './EditComponent';
import { deleteMovieByID } from '../services/movieService';

export function MovieDetails() {
    const navigate = useNavigate();
    const auth = useAuthUser();
    const isAuthenticated = useIsAuthenticated();
    const isAuth = isAuthenticated();

    const { movieId } = useParams();
    const url = `http://localhost:3030/data/movies/${movieId}`;
    const [movie, setMovie] = useState({});

    const [isClicked, setClick] = useState(false);

    function openEditView() {
        setClick(c => {
            let newC = !c;
            return newC;
        });
    }

    async function deleteMovie() {
        const result = await deleteMovieByID(movieId, auth().token);
        if (result) {
            navigate('/movies');
        }
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(m => setMovie(m));
    }, [url]);

    return (
        <>
            <div className="hero mv-single-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <!-- <h1> movie listing - list</h1>
                            <ul class="breadcumb">
                                <li class="active"><a href="#">Home</a></li>
                                <li> <span class="ion-ios-arrow-right"></span> movie listing</li>
                            </ul> --> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single movie-single movie_single">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="movie-img sticky-sb">
                                <img src={movie.img} alt='no img' />
                                {isAuth && <div>
                                    {movie._ownerId == auth().userId ? <div className="movie-btn">
                                        <div className="btn-transform transform-vertical">
                                            <div><button className="item yellowbtn" onClick={openEditView}>Edit</button></div>
                                        </div>
                                        <br />
                                        <div className="btn-transform transform-vertical red">
                                            <div><button className="item  redbtn" onClick={deleteMovie}> <i className="ion-play"></i> Delete</button></div>
                                        </div>
                                    </div> : <></>}</div>}
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="movie-single-ct main-content">
                                {/* Movie Title */}
                                <h1 className="bd-hd">{movie.title} <span>2015</span></h1>
                                <div className="social-btn">
                                    <a href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
                                </div>
                                <div className="movie-rate">
                                    <div className="rate">
                                        <i className="ion-android-star"></i>
                                        <p><span>8.1</span> /10<br />
                                        </p>
                                    </div>
                                    <div className="rate-star">
                                        <p>Like This Movie:  </p>
                                    </div>
                                </div>
                                <div className="movie-tabs">
                                    <div className="tabs">
                                        <ul className="tab-links tabs-mv">
                                            <li className="active"><a href="#overview">Overview</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="overview" className="tab active">
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                                        {/* Movie DEscription: */}
                                                        <p>{movie.description}</p>

                                                        <div className="title-hd-sm">
                                                            <h4>User reviews</h4>

                                                        </div>
                                                        {/* <!-- movie user review --> */}
                                                        <div className="mv-user-review-item">
                                                            <h3>Best Marvel movie in my opinion</h3>
                                                            <div className="no-star">
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star"></i>
                                                                <i className="ion-android-star last"></i>
                                                            </div>
                                                            <p className="time">
                                                                17 December 2016 by <a href="#"> hawaiipierson</a>
                                                            </p>
                                                            {/* Option for user Review */}
                                                            <p>Maybe we can add some user reviw here, but idk...</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-xs-12 col-sm-12">
                                                        <div className="sb-it">
                                                            <h6>Director: </h6>
                                                            <p><a href="#">Joss Whedon</a></p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Genre:</h6>
                                                            <p><a href="#">Action, </a> <a href="#"> Sci-Fi,</a> <a href="#">Adventure</a></p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Release Date:</h6>
                                                            <p>May 1, 2015 (U.S.A)</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Run Time:</h6>
                                                            <p>141 min</p>
                                                        </div>
                                                        {/* Check for user and display adds */}
                                                        {/* <div className="ads">
                                                            <img src={add} alt='add' />
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isClicked && <EditComponent setClick={setClick} movie={movie} setMovie={setMovie} />}
        </>
    );
}
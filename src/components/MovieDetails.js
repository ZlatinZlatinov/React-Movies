import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';

import { deleteMovieByID } from '../services/movieService';

import { EditComponent } from './EditComponent';
import { MovieDetailsHero } from './MovieDetailsHero';
import { SocialComponent } from './SocialComponent';
import { MovieComment } from './MovieComments';
//import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';


export function MovieDetails() {
    const navigate = useNavigate();
    const auth = useAuthUser();
    const isAuthenticated = useIsAuthenticated();
    const isAuth = isAuthenticated();

    const { movieId } = useParams();
    const url = `http://localhost:3030/data/movies/${movieId}`;
    const url2 = `http://localhost:3030/data/comments?where=movieId%3D%22${movieId}%22`;
    const [movie, setMovie] = useState({});

    const [comments, setComments] = useState([]);

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

    function pushComments(comment) {
        setComments(state => [...state, comment]);
    }

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.status !== 200) {
                    navigate('*');
                }

                return res.json();
            })
            .then(m => setMovie(m))
            .catch(err => {
                console.log(err);
            });
        fetch(url2)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } 

                navigate('*');
            })
            .then(result => setComments(result))
            .catch(err => console.log(err))

    }, [url, navigate, url2]);


    return (
        <>
            <MovieDetailsHero />
            <div className="page-single movie-single movie_single">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="movie-img sticky-sb">
                                <img src={movie.img} alt='no img' />
                                {isAuth && <div>
                                    {movie._ownerId === auth().userId ? <div className="movie-btn">
                                        <div className="btn-transform transform-vertical">
                                            <div><button className="item yellowbtn" onClick={openEditView}>Edit</button></div>
                                        </div>
                                        <br />
                                        <div className="btn-transform transform-vertical red">
                                            <div><button className="item  redbtn" onClick={deleteMovie}> Delete</button></div>
                                        </div>
                                    </div> : <></>}</div>}
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="movie-single-ct main-content">
                                {/* Movie Title */}
                                <h1 className="bd-hd">{movie.title} <span>{movie.year}</span></h1>
                                {isAuth && <>
                                    {(movie._ownerId !== auth().userId) ? <SocialComponent movieId={movieId} /> : <></>}
                                </>}
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
                                                        <p style={{ fontSize: '1.7rem' }}>{movie.description}</p>

                                                        <div className="title-hd-sm">
                                                            <h4>Comments:</h4>

                                                        </div>
                                                        {/* <!-- movie user review --> */}
                                                        {isAuth &&
                                                            <MovieComment movieId={movie._id} comments={comments} pushComments={pushComments} owner={movie._ownerId} />}
                                                    </div>
                                                    <div className="col-md-4 col-xs-12 col-sm-12">
                                                        <div className="sb-it">
                                                            <h6>Director: </h6>
                                                            <p>{movie.director}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Genre:</h6>
                                                            <p>{movie.genre}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Year</h6>
                                                            <p>{movie.year}</p>
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
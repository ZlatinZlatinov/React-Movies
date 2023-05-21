import { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { Advertisement } from './Advertisement';
import { CreateForm } from './CreateForm';
import { useIsAuthenticated } from 'react-auth-kit';
import { SearchMovie } from './searchMovieComponent';
import { PagePagination } from './Pagination';
import { MovieCard } from './MovieCard';
import { MovieListHero } from './MovieListHero';
import { Preloader } from './Preloader';

const url = 'http://localhost:3030/data/movies';

export function MovieList() {
    // Checks for Authentication 
    const isAuthenticated = useIsAuthenticated();
    const isAuth = isAuthenticated();

    // Default movies array
    const [moveis, setMovies] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    // For page pagination
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    useEffect(() => {
        setIsloading(true);
        fetch(url)
            .then(response => response.json())
            .then(m => {
                setMovies(m.slice(3));
                const pages = Math.ceil((m.length - 3) / 5);
                setPageCount(pages);
                setIsloading(false);
            })
            .catch(err => setMovies([]))
    }, []);

    // Also for pagination
    const indexLastPost = currentPage * postsPerPage;
    const indexFirstPost = indexLastPost - postsPerPage;
    let currentPosts = moveis.slice(indexFirstPost, indexLastPost);

    function paginate(pageNum) {
        currentPosts = moveis.slice(indexFirstPost, indexLastPost);
        setCurrentPage(pageNum);
    }

    function setMoviesPerPage(e) {
        const value = e.target.value;
        setPostsPerPage(value);
        setPageCount(Math.ceil(currentPosts.length / value));
    }

    function pushMovies(movieData) {
        setMovies(state => [...state, movieData]);
    }

    return (
        <>
            {isLoading ? <Preloader /> :
                <>
                    <MovieListHero />
                    <div className="page-single movie_list">
                        <div className="container">
                            <div className="row ipad-width2">
                                <div className="col-md-8 col-sm-12 col-xs-12">
                                    <div className="topbar-filter">
                                        <p style={{ fontSize: '13pt' }}>Found <span>{moveis.length}</span> in total</p>
                                    </div>

                                    {currentPosts.map((m) => <MovieCard key={m._id} movie={m} />)}

                                    <PagePagination pageCount={pageCount}
                                        paginate={paginate}
                                        currentPage={currentPage}
                                        mpp={postsPerPage}
                                        setMoviesPerPage={setMoviesPerPage} />
                                </div>

                                <div className="col-md-4 col-sm-12 col-xs-12">
                                    <div className="sidebar">
                                        <SearchMovie />
                                        {isAuth ? <CreateForm setMovies={pushMovies} /> : <Advertisement />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
        </>
    );
}
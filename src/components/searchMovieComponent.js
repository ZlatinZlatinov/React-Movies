import { useState } from "react";
import { searchMovieByName } from "../services/movieService";

export function SearchMovie({ setMovies }) {

    const [movieName, setMovieName] = useState('');
    const [err, setErr] = useState(null);

    function inputHandler(e) {
        setMovieName(e.target.value);
    }

    async function searchHandler(e) {
        e.preventDefault();
        const result = await searchMovieByName(movieName);

        if (result.hasOwnProperty('msg')) {
            setErr(result.msg);
            return;
        }

        setMovies([result]);
    }

    return (
        <div className="searh-form">
            <h4 className="sb-title">Search for movie</h4>
            <form className="form-style-1" onSubmit={searchHandler}>
                <div className="row">
                    <div className="col-md-12 form-it">
                        <label>Movie name</label>
                        <input type="text" placeholder="Search movie by name" value={movieName} onChange={inputHandler} />
                    </div>

                    <div className="col-md-12 ">
                        {err ?? <span style={{ color: 'white' }}>{err}</span>}
                        <input className="submit" type="submit" value="Search" />
                    </div>
                </div>
            </form>
        </div>
    );
}
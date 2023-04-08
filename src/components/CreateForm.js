import { useState } from "react";
import { createNewMovie } from "../services/movieService";
import { useAuthUser } from "react-auth-kit";
import { validateMovieData } from "../utils/movieDataValidation";


export function CreateForm({ setMovies }) {
    const [inputValues, setInputValue] = useState({
        title: '',
        description: '',
        director: '',
        img: '',
        genre: 'Action', 
        year: '',
        trailer: '',
    });

    const userInfo = useAuthUser();
    const { token } = userInfo();

    const [err, setErr] = useState(null);

    function inputHandler(e) {
        const name = e.target.name;
        const value = e.target.value;

        setInputValue(state => ({
            ...state,
            [name]: value
        }));
    }

    async function createFormHandler(e) {
        e.preventDefault();

        const validationResult = validateMovieData(inputValues);

        if (validationResult) {
            setErr(validationResult);
            return;
        }

        const data = await createNewMovie(inputValues, token);

        if (data.hasOwnProperty('msg')) {
            setErr(data.message);
            return;
        }

        setMovies(data);

        setInputValue({
            title: '',
            description: '', 
            director: '',
            img: '', 
            genre: '', 
            year: '', 
            trailer: '',
        });

        setErr(null);
    }

    return (
        <div className="searh-form">
            <h4 className="sb-title">Or Create new one</h4>
            <form className="form-style-1" method="POST" onSubmit={createFormHandler}>
                <div className="row">
                    <div className="col-md-12 form-it">
                        <label>Movie title</label>
                        <input type="text" name="title" placeholder="Enter title" value={inputValues.title} onChange={inputHandler} />
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Movie description</label>
                        <input type="text" name="description" placeholder="Enter description" value={inputValues.description} onChange={inputHandler} />
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Movie Director</label>
                        <input type="text" name="director" placeholder="Enter director name" value={inputValues.director} onChange={inputHandler} />
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Year</label>
                        <input type="text" name="year" placeholder="Enter year" value={inputValues.year} onChange={inputHandler} />
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Movie ImageURL</label>
                        <input type="text" name="img" placeholder="Enter imgURL" value={inputValues.img} onChange={inputHandler} />
                    </div> 
                    {/* <div className="col-md-12 form-it">
                        <label>Trailer Link</label>
                        <input type="text" name="trailer" placeholder="Link to movie trailer" value={inputValues.trailer} onChange={inputHandler} />
                    </div> */}
                    <div className="col-md-12 form-it">
                        <label>Select Genre</label>
                        <div className="group-ip">
                            <select name="genre" className="ui fluid dropdown" value={inputValues.genre} onChange={inputHandler}>
                                <option value="Action">Action</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Horror">Horror</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Romance">Romance</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 " style={{ color: 'white' }}>
                        {err ?? <p style={{ color: 'white' }}>{err}</p>}
                        <input className="submit" type="submit" value="Create" />
                    </div>
                </div>
            </form>
        </div>
    );
}
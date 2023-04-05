import { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { editMovie } from "../services/movieService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

export function EditComponent({ setClick, movie, setMovie }) {

    const auth = useAuthUser();
    const token = auth().token;

    const [err, setErr] = useState(null);

    const [inputValues, setInputValues] = useState({
        title: movie.title,
        description: movie.description,
        img: movie.img
    });

    function inputHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputValues(state => ({
            ...state,
            [name]: value
        }));
    }

    async function editMovieHandler(e) {
        e.preventDefault();
        const result = await editMovie(inputValues, movie._id, token);

        if (result.hasOwnProperty('msg')) {
            setErr(result.message);
            return;
        }

        setMovie(result);
        closeView();
    }

    function closeView() {
        setClick(c => !c);
    }

    return (
        <div className="overlay openform">
            <div className="login-wrapper" id="signup-content">
                <div className="row" style={{ paddingLeft: '18px' }}>
                    <button style={{ color: 'white', background: 'rgba(7,9,10,255)', border: 'none', fontSize:'12pt' }}
                        onClick={closeView}><FontAwesomeIcon icon={faCircleXmark} /> Close</button>
                </div>
                <div className="login-content">
                    <h3>edit movie details</h3>
                    <form method="POST" onSubmit={editMovieHandler}>
                        <div className="row">
                            <label htmlFor="email-2">
                                Movie Title
                                <input type="text"
                                    name="title"
                                    id="email-2"
                                    required="required"
                                    value={inputValues.title}
                                    onChange={inputHandler}
                                />
                            </label>
                        </div>
                        <div className="row">
                            <label htmlFor="password-2">
                                Movie description:
                                <input type="text"
                                    name="description"
                                    id="password-2"
                                    required="required"
                                    value={inputValues.description}
                                    onChange={inputHandler}
                                />
                            </label>
                        </div>
                        <div className="row">
                            <label htmlFor="repassword-2">
                                Movie img url:
                                <input type="text"
                                    name="img"
                                    id="repassword-2"
                                    required="required"
                                    value={inputValues.img}
                                    onChange={inputHandler}
                                />
                            </label>
                        </div>
                        <div className="row">
                            {err && <span>  {err}</span>}
                            <button type="submit">edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
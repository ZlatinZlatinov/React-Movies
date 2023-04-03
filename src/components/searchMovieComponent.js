import { useState } from "react";

export function SearchMovie() {

    const [movieName, setMovieName] = useState('');

    return (
        <div className="searh-form">
            <h4 className="sb-title">Search for movie</h4>
            <form className="form-style-1">
                <div className="row">
                    <div className="col-md-12 form-it">
                        <label>Movie name</label>
                        <input type="text" placeholder="Search movie by name" />
                    </div>

                    <div className="col-md-12 ">
                        <input className="submit" type="submit" value="Search" />
                    </div>
                </div>
            </form>
        </div>
    );
}
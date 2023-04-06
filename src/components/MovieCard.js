import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export function MovieCard({ movie }) {
    function numToDate(num) {
        //let num = 1546108200;
        let date = new Date(num);
        return (date.toUTCString().split(' ').slice(0, 4).join(' '));
    }

    return (
        <div className="movie-item-style-2" key={movie._id}>
            <img src={movie.img} alt="None" />
            <div className="mv-item-infor">
                <h6><Link to={`/details/${movie._id}`}>{movie.title}</Link></h6>
                <p className="rate" style={{color: 'goldenrod'}}><FontAwesomeIcon icon={faStar}/></p>
                <p className="describe">{movie.description}</p>
                <p className="run-time"> Created on:<span>{numToDate(movie._createdOn)}</span></p>
                <p>Title: <span>{movie.title}</span></p>
            </div>
        </div>
    );
}
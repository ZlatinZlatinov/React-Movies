import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
    function numToDate() {
        let num = 1546108200;
        let date = new Date(num * 1000);
        return (date.toUTCString().split(' ').slice(0, 4).join(' '));
    }

    return (
        <div className="movie-item-style-2" key={movie._id}>
            <img src={movie.img} alt="None" />
            <div className="mv-item-infor">
                <h6><Link to={`/details/${movie._id}`}>{movie.title}</Link></h6>
                <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
                <p className="describe">{movie.description}</p>
                <p className="run-time"> Created on:<span>{numToDate(movie._createdOn)}</span></p>
                <p>Title: <span>{movie.title}</span></p>
            </div>
        </div>
    );
}
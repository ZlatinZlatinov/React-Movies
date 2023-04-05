import { Link } from "react-router-dom";

export function PagePagination({pageCount, paginate, currentPage, mpp, setMoviesPerPage}) {

    const arr = [1];

    for (let x = 2; x <= pageCount; x++) {
        arr.push(x);
    }

    return (
        <div className="topbar-filter">
            <label>Movies per page: {mpp}</label>
            <select name="mpp" value={mpp} onChange={setMoviesPerPage}>
                <option value={5}>5 Movies</option>
                <option value={10}>10 Movies</option>
            </select>
            <div className="pagination2">
                <span>Page {currentPage} of {pageCount}:</span>
                {arr.map((num, i) => (
                    <Link to='/movies' key={i} onClick={() => paginate(num)}>{num}</Link>
                ))}
                <a href="!#"><i className="ion-arrow-right-b"></i></a>
            </div>
        </div>
    )
}
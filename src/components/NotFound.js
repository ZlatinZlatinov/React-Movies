import { Link } from "react-router-dom";
import err from '../static/images/err-img.png';
import logo from '../static/images/logo1.png';

export function NotFound() {
    return (
        <div className="page-single-2">
            <div className="container">
                <div className="row">
                    <div className="middle-content">
                        <img className="md-logo" src={logo} alt="logo" />
                        <img src={err} alt="404" />
                        <h1>Page not found</h1>
                        <Link to="/" className="redbtn">go home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
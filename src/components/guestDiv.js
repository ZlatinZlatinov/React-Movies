import { Link } from "react-router-dom";

export function GuestDiv() {
    return (
        <>
            <li className="loginLink"><Link to="/login">LOG In</Link></li>
            <li className="btn signupLink"><Link to="/register">sign up</Link></li>
        </>
    );
}
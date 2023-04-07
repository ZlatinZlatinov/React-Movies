import { Link, useNavigate } from 'react-router-dom';
import { MainView } from './MainView';
import { useState, } from 'react';
import { logUser } from '../services/userService';
import { useSignIn } from 'react-auth-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

export function LoginComponent() {
    const signIn = useSignIn();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(null);

    function usernameHandler(e) {
        setEmail(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    async function loginFormHandler(event) {
        event.preventDefault();

        const result = await logUser({ email, password }, 'login');

        if (result.hasOwnProperty('msg')) {
            setErr(result.msg);
            return;
        }

        signIn({
            token: result.accessToken,
            expiresIn: 180, // in minutes
            tokenType: 'Bearer',
            authState: { email: result.email, userId: result._id, token: result.accessToken }
        });

        navigate('/');
    }

    return (
        <>
            <div className="overlay openform">
                <div className="login-wrapper" id="login-content" >
                    <div className="row" style={{ paddingLeft: '14px', fontSize: '12pt' }}>
                        <Link style={{ color: 'white' }} to="/"><FontAwesomeIcon icon={faCircleXmark} /> Close</Link>
                    </div>
                    <div className="login-content">
                        <h3>Login</h3>
                        <form method="post" onSubmit={loginFormHandler}>
                            <div className="row">
                                <label htmlFor="username">
                                    Email:
                                    <input type="text"
                                        name="username"
                                        id="username"
                                        placeholder="john_cena@wwe.com"
                                        required="required"
                                        value={email}
                                        onChange={usernameHandler}
                                        style={{ textTransform: 'lowercase' }} />
                                </label>
                            </div>

                            <div className="row">
                                <label htmlFor="password">
                                    Password:
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        placeholder="******"
                                        required="required"
                                        value={password}
                                        onChange={passwordHandler} />
                                </label>
                            </div>
                            <div className="row">
                                {err && <span>  {err}</span>}
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <MainView />
        </>
    );
}
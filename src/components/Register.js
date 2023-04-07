import { Link, useNavigate } from 'react-router-dom';
import { MainView } from './MainView';
import { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { logUser } from '../services/userService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { validateUserdata } from '../utils/regUserDataValidation';

export function RegisterComponent() {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
        rePass: ''
    });

    const [err, setErrors] = useState(null);

    function inputHandler(e) {
        const name = e.target.name;
        const value = e.target.value;

        setInputValues(state => ({
            ...state,
            [name]: value
        }));
    }

    async function registerFormHandler(e) {
        e.preventDefault();

        const validattionResult = validateUserdata(inputValues);

        if (validattionResult) {
            setErrors(validattionResult);
            return;
        }

        const result = await logUser({ email: inputValues.email, password: inputValues.password }, 'register');

        if (result.hasOwnProperty('msg')) {
            setErrors(result.msg);
            return;
        }

        signIn({
            token: result.accessToken,
            expiresIn: 3600,
            tokenType: 'Bearer',
            authState: { email: result.email, userId: result._id, token: result.accessToken }
        });

        navigate('/');
    }


    return (
        <>
            <div className="overlay openform">
                <div className="login-wrapper" id="signup-content">
                    <div className="row" style={{ paddingLeft: '14px', fontSize: '12pt' }}>
                        <Link style={{ color: 'white' }} to="/"><FontAwesomeIcon icon={faCircleXmark} /> Close</Link>
                    </div>
                    <div className="login-content">
                        <h3>sign up</h3>
                        <form method="POST" onSubmit={registerFormHandler}>
                            <div className="row">
                                <label htmlFor="email-2">
                                    your email:
                                    <input type="email"
                                        name="email"
                                        id="email-2"
                                        placeholder="john_cena@wwe.com"
                                        required="required"
                                        value={inputValues.email}
                                        onChange={inputHandler} 
                                        style={{textTransform:'lowercase'}}/>
                                </label>
                            </div>
                            <div className="row">
                                <label htmlFor="password-2">
                                    Password:
                                    <input type="password"
                                        name="password"
                                        id="password-2"
                                        placeholder="Atleast 6 characters long"
                                        required="required"
                                        value={inputValues.password}
                                        onChange={inputHandler} />
                                </label>
                            </div>
                            <div className="row">
                                <label htmlFor="repassword-2">
                                    re-type Password:
                                    <input type="password"
                                        name="rePass"
                                        id="repassword-2"
                                        placeholder="Should be same as password"
                                        required="required"
                                        value={inputValues.rePass}
                                        onChange={inputHandler} />
                                </label>
                            </div>
                            <div className="row">
                                {err && <span>  {err}</span>}
                                <button type="submit">sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <MainView />
        </>
    );
}
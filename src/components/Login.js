import { Link } from 'react-router-dom';
import { MainView } from './MainView';

export function LoginComponent() {
    return (
        <>
            <div className="overlay openform">
                <div className="login-wrapper" id="login-content" >
                    <div className="row" style={{ paddingLeft: '18px' }}>
                        <Link style={{ color: 'white' }} to="/">Close</Link>
                    </div>
                    <div className="login-content">
                        <h3>Login</h3>
                        <form method="post">
                            <div className="row">
                                <label htmlFor="username">
                                    Username:
                                    <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                                </label>
                            </div>

                            <div className="row">
                                <label htmlFor="password">
                                    Password:
                                    <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                                </label>
                            </div>
                            <div className="row">
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
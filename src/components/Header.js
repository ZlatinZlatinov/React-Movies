import logo1 from '../static/images/logo1.png';
import { Link } from 'react-router-dom';
import { useIsAuthenticated, useAuthUser } from 'react-auth-kit';
import { UserDiv } from './userDiv';
import { GuestDiv } from './guestDiv';
//import { MainView } from './MainView';


export default function Header() {
    const isAuthenticated = useIsAuthenticated();
    const result = isAuthenticated();
    const auth = useAuthUser(); 

    return (
        <>
            <header className="ht-header">
                <div className="container">
                    <nav className="navbar navbar-default navbar-custom">
                        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                        <div className="navbar-header logo">
                            <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            </div>
                            <Link to="/"><img className="logo" src={logo1} alt="" width="119" height="58" /></Link>
                        </div>
                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav flex-child-menu menu-left">
                                <li className="dropdown first">
                                    <Link to='/' className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                                        Home
                                    </Link>
                                </li>
                                <li className="dropdown first">
                                    <Link to='/movies' className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        Movies
                                    </Link>
                                </li>

                                <li className="dropdown first">
                                    <Link to='/about' className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                                        About
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav flex-child-menu menu-right">
                                <li className="btn">
                                    <span className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown" style={{ color: "white" }}>
                                        {result ? `Welcome, ${auth().email}` : 'Welcome, Guest'} <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </li>
                                {result ?  <UserDiv/> : <GuestDiv /> }
                            </ul>
                        </div>
                        {/* <!-- /.navbar-collapse --> */}
                    </nav>

                    {/* <!-- top search form --> */}
                </div>
            </header>
            {/* <MainView />  */}
        </>
    )
}
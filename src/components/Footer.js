import logo1 from '../static/images/logo1.png';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="ht-footer">
	<div className="container">
		<div className="flex-parent-ft">
			<div className="flex-child-ft item1">
				 <Link to="/"><img className="logo" src={logo1} alt="nope"/></Link>
				 <p>5th Avenue st, manhattan<br/>
				New York, NY 10001</p>
				<p>Call us: <span>(+01) 202 342 6789</span></p>
			</div>
			<div className="flex-child-ft item2">
				<h4>Links</h4>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li> 
					<li><Link to="/movies">Movies</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/register">Register</Link></li>
				</ul>
			</div>
			
		</div>
	</div>
	<div className="ft-copyright">
		<div className="ft-left">
			<p>Credits for the template: <a target="_blank" rel='noreferrer' href="https://www.templateshub.net/template/Film-Review-Movie-Database">Templates Hub</a></p>
		</div>
		<div className="backtotop">
			<p><a href="/" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up"></i></a></p>
		</div>
	</div>
</footer>
    )
}
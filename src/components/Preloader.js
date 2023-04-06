import logo from '../static/images/logo1.png';

export function Preloader() {
    return (
        <div id="preloader">
            <img className="logo" src={logo} alt="" width="119" height="58" />
            <div id="status">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
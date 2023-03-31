import add from '../static/images/uploads/ads1.png';

export function Addverrtisement() {
    return (
        <div className="ads">
            <span>Your advertisement here:</span>
            <img src={add} alt="None" />
        </div>
    );
}
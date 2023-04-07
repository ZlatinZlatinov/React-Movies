const url = 'https://www.templateshub.net/uploads/1549900162%20Movie-Database-min.png';

export function Advertisement() {
    return (
        <div className="ads">
            <span>Advertisement:</span>
            <img src={url} alt="None" />
        </div>
    );
}
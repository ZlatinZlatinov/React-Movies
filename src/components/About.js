//import { MainView } from "./MainView"

const imgSrc = 'https://static.boredpanda.com/blog/wp-content/uploads/2019/05/marvel-avengers-movie-actors-90s-houseofmat-3-5cd15080e4ff4__700.jpg';
export function About() {


    return ( // nope, guess i wont use that for now...
        <><div className="hero common-hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-ct">
                            <h1> About</h1>
                            <ul className="breadcumb">
                                <li className="active"><a href="/">Home</a></li>
                                <li> <span className="ion-ios-arrow-right"></span>About</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="page-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="blog-detail-ct">
                                <h1>Movies catalog made with ReactJS</h1>

                                <img src={imgSrc} alt="Cast" />
                                <p style={{fontSize: '1.8rem', letterSpacing:'0.4px'}}>
                                    Avengers: Infinity War has finally hit theaters, and fans of the Marvel Cinematic Universe are naturally asking the most important question of them all: what if The Avengers was made in the 1990s? It's a question as old as time, or at least as old as the '90s.

                                    It's always fun to hypothetically cast the most popular actors of a decade, and attempt to fit their personality and on-screen presence to a specific character. Who might have played Iron Man (considering Robert Downey Jr. was still an avid socialite)? What would happen if the MCU started 20 years ago? There are dozens of actors and actresses who almost made it into Marvel movies, and several of them could have led their own franchises at the height of their '90s popularity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
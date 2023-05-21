import { useState, useEffect } from "react";
import { url, imgSrc } from "../secretStuff";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Preloader } from "./Preloader";

/*--- READ ---- HERE -----*/
/* In order to use this component you will need an access key from 
https://www.themoviedb.org/

So, if you dont know how to get one, watch this video: https://www.youtube.com/watch?v=FlFyrOEz2S4 
and replace the api key in the url with your own. 

You can checkout the API documentation here: https://developers.themoviedb.org/3/getting-started/introduction*/

export function MovieSlider() {
    const [moveis, setMovies] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true)
        fetch(url)
            .then(response => response.json())
            .then(m => {
                setMovies(m.results);
                setIsloading(false);
            })
            .catch(err => setMovies([]))
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1920 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1920, min: 900 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 900, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    return (
        <>
            {isLoading ? <Preloader /> :
                <div className="slider movie-items">
                    < div className="container" >
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-ct">
                                    <p style={{ color: 'white' }}>
                                        <h2>Trending now</h2>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="slick-multiItemSlider">
                                <Carousel responsive={responsive}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}>
                                    {moveis.map((m) => (
                                        <div className="movie-item" key={m.id}>
                                            <div className="mv-img">
                                                <img src={imgSrc + m.poster_path} alt="none" width="285" height="437" />
                                            </div>
                                            <div className="title-in">
                                                <h6><a href={`https://www.themoviedb.org/movie/${m.id}`}>{m.title}</a></h6>
                                                <p><i className="ion-android-star"></i><span>{Math.floor(m.vote_average)}</span> /10</p>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div >
                </div >
            }
        </>
    );
}
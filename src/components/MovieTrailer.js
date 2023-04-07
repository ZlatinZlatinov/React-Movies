import { useState, useEffect } from "react";

export function MovieTrailer({ link }) {
    const [id, setId] = useState('Xithigfg7dA');

    useEffect(() => {
        if (link) {
            setId(link.split('=')[1]);
        }
    }, [link])

    return (
        <div className="trailers">
            <div className="container">
                <div className="row ipad-width">
                    <div className="col-md-12">
                        <div className="videos">
                            {/* <div className="slider-for-2 video-ft">
                                <div>
                                    <iframe className="item-video" src={'https://www.youtube.com/embed/' + id} title="soUnique"></iframe>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
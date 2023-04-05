import { useState } from 'react';
import { useAuthUser } from 'react-auth-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { getMovieLikes, sendLike } from '../services/likesService';
import { addToFavorites, getMyFavorites } from '../services/favoritesService';


export function SocialComponent({ movieId }) {
    const [likes, setLikes] = useState(0);
    const auth = useAuthUser();
    const token = auth().token;

    function addToMovieFavorites() {
        addToFavorites(movieId, token, auth().userId);
        getMyFavorites(movieId, auth().userId);
        console.log('Not working atm....');
    }

    async function likeMovie() {
        const result = await sendLike(movieId, token);
        console.log(result);
        getLikes();
    }

    async function getLikes() {
        const lk = await getMovieLikes(movieId);
        setLikes(lk)
    }
    getLikes();

    return (
        <>
            <div className="social-btn" >
                <button className="parent-btn" style={{
                    fontSize: '14pt',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'red'
                }}
                    onClick={addToMovieFavorites}><FontAwesomeIcon icon={faCirclePlus} /> ADD TO FAVORITES</button>
            </div>
            <div className="movie-rate">
                <div className="rate">
                    <p>
                        <span style={{ fontSize: '12pt' }}>Likes: {likes}</span><br />
                    </p>
                </div>
                <div className="rate-star">
                    <p style={{ fontSize: '14pt' }}>Like This Movie:  <button style={{
                        color: 'red',
                        fontSize: '14pt',
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                        onClick={likeMovie}><FontAwesomeIcon icon={faThumbsUp} /></button></p>
                </div>
            </div>
        </>
    )
}
import { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { sendComment } from "../services/commentsService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

export function MovieTrailer({ movieId, comments, pushComments, owner }) {
    const [inputValues, setInputValue] = useState({
        email: '',
        comment: '',
    });



    const userInfo = useAuthUser();
    const { token, userId } = userInfo();
    //const url = `http://localhost:3030/data/comments?where=movieId%3D%22${movieId}`;

    function inputHandler(e) {
        const name = e.target.name;
        const value = e.target.value;

        setInputValue(state => ({
            ...state,
            [name]: value
        }));
    }

    async function commentHandler(e) {
        e.preventDefault();

        const result = await sendComment(movieId, inputValues, token);

        setInputValue({
            email: '',
            comment: '',
        })

        pushComments(result);
    }

    function numToDate(num) {
        let date = new Date(num);
        return (date.toUTCString().split(' ').slice(0, 4).join(' '));
    }

    return (
        <div className="blog-detail-ct">
            {comments && <div className="comments">
                {comments.map(c => <div className="cmt-item flex-it" key={c._id}>
                    <div className="author-infor">
                        <div className="flex-it2">
                            <FontAwesomeIcon icon={faUserAstronaut} style={{ color: 'white' }} />
                            <h6><a href="/">{c.email}</a></h6> <span className="time">{numToDate(c._createdOn)}</span>
                        </div>
                        <p>{c.comment}</p>
                    </div>
                </div>)}
            </div>}
            {userId !== owner ?
                <div className="comment-form">
                    <h4>Leave a comment</h4>
                    <form method="POST" onSubmit={commentHandler}>
                        <div className="row">
                            <div className="col-md-4">
                                <input type="text" name="email" placeholder="Your email" value={inputValues.email} onChange={inputHandler} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <textarea name="comment" id='message' cols={30} rows={10} placeholder="Message" value={inputValues.comment} onChange={inputHandler}></textarea>
                            </div>
                        </div>
                        <input className="submit" type="submit" placeholder="comment" />
                    </form>
                </div> : <></>}

        </div>
    );
}
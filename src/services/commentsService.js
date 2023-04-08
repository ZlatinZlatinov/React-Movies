
async function sendComment(movieId, {email, comment}, token) {
    const url = 'http://localhost:3030/data/comments';
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ movieId, email, comment })
    });

    const result = await response.json();

    return result;
} 

export {
    sendComment
}
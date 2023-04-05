
async function sendLike(albumId, token) {
    const url = 'http://localhost:3030/data/likes';
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ albumId })
    });

    const result = await response.json();

    return result;
}

async function getMovieLikes(albumId) {
    const url = `http://localhost:3030/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`;

    const response = await fetch(url);
    const likes = await response.json();

    return likes;
} 

export {
    sendLike, 
    getMovieLikes
}

async function addToFavorites(movieId, token, ownerId){
    const url = 'http://localhost:3030/jsonstore/favorites';
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ movieId, ownerId })
    });

    const result = await response.json();
    console.log(result);
    return true;
}  

async function getMyFavorites(movieId, ownerId){
    const url = `http://localhost:3030/jsonstore/favorites?where=movieId%3D%22${ownerId}`//%22%20and%20ownerId%3D%22${ownerId}%22&count`; 

    const response = await fetch(url); 
    const result = await response.json();
    console.log(result);
}

export {
    addToFavorites, 
    getMyFavorites
}
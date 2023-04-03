
export async function createNewMovie(movieData, token) {
    const url = 'http://localhost:3030/data/movies';
    let msg = null;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(movieData)
        });

        const result = await response.json();

        return result;

    } catch (err) {
        msg = 'No connection with the server!';
    }

    if (msg) {
        return { message: msg }
    }
}

export async function editMovie(movieData, id, token) {
    const url = `http://localhost:3030/data/movies/${id}`;

    let msg = null;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(movieData)
        });

        if (response.status === 200) {
            const result = await response.json();

            return result;
        }

    } catch (err) {
        msg = 'No connection with the server!';
    }

    if (msg) {
        return { message: msg }
    }
}

export async function deleteMovieByID(id, token) {
    const url = `http://localhost:3030/data/movies/${id}`;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    });

    if (response.status === 200) {
        return true;
    }

    return false;
}

export async function searchMovieByName(movieName) {
    const url = `http://localhost:3030/data/movies?where=title%3D%22${movieName}%22`;

    const response = await fetch(url);
    const result = await response.json();

    if (result[0]) {
        return result[0];
    }

    return { msg: 'No matches were found!' };
}
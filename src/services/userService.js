

async function logUser(userData, endPoint) {
    const url = `http://localhost:3030/users/${endPoint}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        if (response.status !== 200) {

            return { msg: 'Wrong username or password!' };
        }

        const data = await response.json();

        return data;
    } catch (err) {
        console.log('err here: ' + err);
    }
}

async function logOutUser(token) {
    const url = 'http://localhost:3030/users/logout';

    const response = await fetch(url, {
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
export {
    logUser, 
    logOutUser
}
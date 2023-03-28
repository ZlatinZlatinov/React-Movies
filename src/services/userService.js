
const url = 'http://localhost:3030/users/login';

async function logUser(userData) {
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

export {
    logUser
}
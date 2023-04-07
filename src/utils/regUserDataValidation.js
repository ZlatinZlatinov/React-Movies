export function validateUserdata(inputValues) {

    if ((inputValues.password).length < 6) {
        return 'Password should be atleast 6 characters long!';
    }

    if (inputValues.password !== inputValues.rePass) {
        return 'Password and repeat-password fields should be equal!';
    }

    if ((inputValues.email).length < 6 || (inputValues.email).includes('@') === false) {
        return 'A valid user email should be 6 charactes long and include @';
    } 

    return false;
}
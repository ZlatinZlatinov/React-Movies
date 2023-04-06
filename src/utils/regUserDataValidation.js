export function validateUserdata(inputValues) {

    if ((inputValues.password).length < 5) {
        return 'Password should be atleast 5 characters long!';
    }

    if (inputValues.password !== inputValues.rePass) {
        return 'Password and repeat-password fields should be equal!';
    }

    if ((inputValues.email).length <= 5 || (inputValues.email).includes('@') == false) {
        return 'A valid user email should be 5 charactes long and include @';
    } 

    return false;
}

export function validateMovieData({ title, description, img }) {
    if (title.length < 2) {
        return 'Movie title should be atleast 2 charactes long';
    }

    if (description.length < 20) {
        return 'Movie description should be atleast 20 characters long';
    }

    if (String(img).startsWith('http') === false) {
        return 'Movie image URL should start with http:// or https://';
    }

    return false;
}
export const getMovies = () => {
    return fetch(
        '/api/movies',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }).then(res => res.json());
};
export function addMovieFavorite(payload) {
    return { 
        type: "ADD_MOVIE_FAVORITE", payload 
    };
}

export function removeMovieFavorite(idMovie) {
    return { 
        type: "REMOVE_MOVIE_FAVORITE", 
        payload: idMovie 
    };
} 

export function getMovieDetail(idMovie) {
    return function(dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=4283fbd2&i=${idMovie}`)
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "GET_MOVIE_DETAIL", payload: data });
        });
    }

}
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=4283fbd2&s=` + titulo)
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "GET_MOVIES", payload: data });
        });
    };
}
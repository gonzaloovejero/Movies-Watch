import MovieCard from "./MovieCard";
import movies from "./movies.json";
import styles from "./MovieGrid.module.css";


function MoviesGrid() {

    return (
        <div>
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => {
                    return (

                        <MovieCard key={movie.id} movie={movie} />

                    )
                })}
            </ul>
        </div>

        //Este map agarra los archivos de la variable "movies" (json), recorre sus objetos y los 
        //convierte en arrays
        //como nombre a la funcion anonima le puse "movies"
        //la cual llamaremos a sus arrays que necesitemos con "movies.y el nombre del array"
    )

}




export default MoviesGrid;
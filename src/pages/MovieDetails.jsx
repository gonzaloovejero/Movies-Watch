import React from "react";
import movies from "../components/movies.json";
import DetailCard from "../components/DetailCard";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {

    return (

        <div className={styles.target}>
            <ul className={styles.grid}>
                {movies.map((details) => {
                    return (
                        <DetailCard key={details.id} resumen={details.overview} title={details.title} />
                    )
                })}
            </ul>
        </div>
    )
}

export default MovieDetails;
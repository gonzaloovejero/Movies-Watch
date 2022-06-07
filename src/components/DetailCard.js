import React from "react";
import styles from './DetailCard.module.css';
import movies from '../components/movies.json';

const DetailCard = (props) => {

    return (

        <div className={styles.grid}>

            <div className={styles.card}>
                <h3>{props.title}</h3>
                <p>{props.resumen}</p>

            </div>

        </div>


    )

}


export default DetailCard;
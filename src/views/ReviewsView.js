import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../API/API';
import styles from './views.module.css';


export default function ReviewsView({ movieId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId)
            .then(result => setReviews(result));
    }, [movieId]);
    
    return (
        <div>
            {reviews.length > 0 ? (
                <>
                    <ul
                    >
                        {reviews.map((item, index) => (
                            <li key={index} className={styles.reviewsItem}>
                                <p className={styles.reviewsTitle}>{item.author}</p>
                                <p className={styles.reviewsDescr} >{item.content}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (<p>No Reviews</p>)}
        </div>
    );      
} 
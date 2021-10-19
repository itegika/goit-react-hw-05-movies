import { useState, useEffect } from "react";
import { fetchMovieCast, IMAGE_URL } from "../../API/API";
import styles from "../views.module.css";

export default function MovieCastView({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then((result) => setCast(result));
  }, [movieId]);

  return (
    <ul className={styles.castList}>
      {cast.map((item) => (
        <li key={item.id} className={styles.castItem}>
          <img
            src={
              item.profile_path
                ? IMAGE_URL + item.profile_path
                : "Image Not Found"
            }
            // добавить дефолтную картинку
            alt={item.name}
            width="100"
            height="150"
          />
          <p className={styles.castName}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

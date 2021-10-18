import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation} from 'react-router-dom';
import { fetchMovies, IMAGE_URL } from '../API/API';
import SearchForm from '../components/SearchForm';
import styles from './views.module.css';


export default function MoviesView() {
    const { url } = useRouteMatch();
      const location = useLocation();
      const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
fetchMovies(query).then(request => {
      if (!request.length) {alert('Not found. Try something else')
        return;
      }
      setMovies(request);
     
    });
  }, [query]);

  const onFormSubmit = request => {
    setQuery(request);
  };

  return (
    <>
          <SearchForm onSubmit={onFormSubmit}/>

          <ul className={styles.list}>
            {movies && movies.map(movie => (
                <li key={movie.id}
                    className={styles.item}>
                    <Link to={{
                        pathname: `${url}/${movie.id}`,
                        state: { from: location },
                    }} className={styles.title}>
                        <img

                            src={movie.poster_path ? IMAGE_URL + movie.poster_path: 'POSTER NOT FOUND' }
                            alt={movie.title || movie.name}
                            width="230"
                            height="320"
                        />
                        <p>{movie.original_title}</p>
                    </Link>
                </li>
            ))}
        </ul>
      
    </>
  );
}
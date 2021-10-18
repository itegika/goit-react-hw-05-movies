import React, { useState, useEffect } from 'react';
import { fetchMovieDetails, IMAGE_URL }  from '../API/API';
import { useParams, useRouteMatch, Route, Switch, NavLink,  useLocation, useHistory  } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { lazy, Suspense } from 'react';
import styles from './views.module.css';


const CastView = lazy(() => import('../views/CastView' /* webpackChunkName: "CastView" */),);
const ReviewsView = lazy(() => import('../views/ReviewsView' /* webpackChunkName: "ReviewsView" */),);

const MovieDetailsView = () => {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(movie => {
        setMovie(movie);
      });
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
    };

    return (
  <>
      {movie && (
        <>
                  <button type="button" className={styles.button} onClick={handleGoBack}>GoBack</button>
                    <div>
                        <div className={styles.movieBox}>
                <img
                src={movie.poster_path? IMAGE_URL + movie.poster_path: "Image Not Found"}
                alt={movie.title || movie.name}
                widht="300"
                height="450"
                            />
                       
                            <div className={styles.movieInfoBox}>
                              <h2 className={styles.movieDescrTitle}>{movie.title || movie.name}</h2>
                              <p className={styles.rating}>
                  Rating:     <span className={styles.description}> {movie.vote_average} </span></p>
                              <p className={styles.subtitle}>
                  Overview:
                                  <span className={styles.description}>{movie.overview}</span></p>
                              <p className={styles.subtitle}>
                  Genres:
                                  <span className={styles.genres}>
                    {movie.genres.map(genre => genre.name).join(', ')}
                  </span>
                                </p>
                                   
              </div>
            </div>
            <hr />

            <nav>
              <NavLink
                to={`${url}/cast`} className={styles.link} activeClassName={styles.activeLink}>
                Cast
            </NavLink>
              <NavLink
                to={`${url}/reviews`} className={styles.link} activeClassName={styles.activeLink}>
                Reviews
            </NavLink>
            </nav>

                      <Suspense fallback={<Spinner />}>
              <Switch>
                <Route path={`${path}/cast`}>
                  <CastView movieId={movieId} />
                </Route>

                <Route path={`${path}/reviews`}>
                  <ReviewsView movieId={movieId} />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsView;
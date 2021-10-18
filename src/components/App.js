import React, {lazy, Suspense} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Container from './Container';
import AppBar from './AppBar';
import Spinner from '../components/Spinner';

const HomeView = lazy(() => import('../views/HomeView' /*webpackChunkName: "HomeView"*/));
const MoviesView = lazy(()=>import('../views/MoviesView'/*webpackChunkName: "MoviesView"*/));
const PageNotFoundView = lazy(() => import('../views/PageNotFoundView'/*webpackChunkName: "PageNotFoundView"*/));
const MovieDetailsView =lazy(()=>import('../views/MovieDetailsView' /*webpackChunkName: "MovieDetailsView"*/))

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner/>}>
      <Switch>
      <Route path="/" exact>
        <HomeView/>
      </Route>
      <Route path="/movies" exact>
        <MoviesView/>
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsView/>
        </Route>
        <Route>
          <PageNotFoundView/>? <Redirect to="/" />
          </Route>
        </Switch>
        </Suspense>
   </Container>
  );
}

export default App;

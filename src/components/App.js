import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Container from "./Container";
import AppBar from "./AppBar";
import Spinner from "../components/Spinner";
import paths from "../sharedData/sharedData";
console.log(paths);

const HomeView = lazy(() =>
  import("../views/HomePage/HomeView" /*webpackChunkName: "HomeView"*/)
);
const MoviesView = lazy(() =>
  import("../views/MoviesPage/MoviesView" /*webpackChunkName: "MoviesView"*/)
);
const PageNotFoundView = lazy(() =>
  import(
    "../views/NotFoundPage/PageNotFoundView" /*webpackChunkName: "PageNotFoundView"*/
  )
);
const MovieDetailsView = lazy(() =>
  import(
    "../views/MovieDetailsPage/MovieDetailsView" /*webpackChunkName: "MovieDetailsView"*/
  )
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={paths.home} exact>
            <HomeView />
          </Route>
          <Route path={paths.movies} exact>
            <MoviesView />
          </Route>
          <Route path={paths.movieDetails}>
            <MovieDetailsView />
          </Route>
          <Route>
            <PageNotFoundView />? <Redirect to={paths.home} />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;

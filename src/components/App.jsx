import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import HomePage from 'pages/HomePage/HomePage';
import Movies from 'pages/HomePage/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
        >
          Movies
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

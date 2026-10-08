import { Link } from "react-router-dom";

function MovieList({ movieList }) {
  return (
    <div className="container">
      <h1 className="main-title">Movie List</h1>

      <div className="movie-list">
        {movieList.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div className="movie-info">
              <Link to={`/movie/${movie.id}`} className="movie-title">
                {movie.title}
              </Link>

              <p className="rating">
                {"★".repeat(movie.rating)}
                {"☆".repeat(5 - movie.rating)}
              </p>
            </div>

            <Link to={`/movie/${movie.id}`} className="details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>

      <Link to="/add" className="add-btn">
        Add New Movie
      </Link>
    </div>
  );
}

export default MovieList;
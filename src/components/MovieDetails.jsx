import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MovieDetails({ movieList, setMovieList }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movieList.find((item) => item.id === Number(id));

  const [isUpdating, setIsUpdating] = useState(false);

  const [title, setTitle] = useState(movie?.title || "");
  const [rating, setRating] = useState(movie?.rating || 5);
  const [description, setDescription] = useState(
    movie?.description || ""
  );

  if (!movie) {
    return (
      <div className="container">
        <h2>Movie not found</h2>

        <button className="back-btn" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    const updatedMovies = movieList.filter(
      (item) => item.id !== Number(id)
    );

    setMovieList(updatedMovies);
    navigate("/");
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedMovies = movieList.map((item) =>
      item.id === Number(id)
        ? {
            ...item,
            title,
            rating: Number(rating),
            description,
          }
        : item
    );

    setMovieList(updatedMovies);
    setIsUpdating(false);
  };

  return (
    <div className="container details-container">
      {!isUpdating ? (
        <>
          <h1 className="main-title">{movie.title}</h1>

          <div className="details-card">
            <h2>{movie.title}</h2>

            <p className="description">{movie.description}</p>

            <p className="rating big-rating">
              {"★".repeat(movie.rating)}
              {"☆".repeat(5 - movie.rating)}
            </p>
          </div>

          <div className="button-group">
            <button
              className="update-btn"
              onClick={() => setIsUpdating(true)}
            >
              Update
            </button>

            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>

            <button
              className="back-btn"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="main-title">Update Movie</h1>

          <form onSubmit={handleUpdate}>
            <label>Title</label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label>Rating</label>

            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />

            <label>Description</label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>

            <button type="submit" className="update-btn">
              Update Movie
            </button>

            <button
              type="button"
              className="back-btn"
              onClick={() => setIsUpdating(false)}
            >
              Back
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
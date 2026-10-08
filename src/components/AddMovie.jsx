import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie({ movieList, setMovieList }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(5);
  const [description, setDescription] = useState("");

  const handleAddMovie = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title: title,
      rating: Number(rating),
      description: description,
    };

    setMovieList([...movieList, newMovie]);

    navigate("/");
  };

  return (
    <div className="container form-container">
      <h1 className="main-title">Add New Movie</h1>

      <form onSubmit={handleAddMovie}>
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

        <button type="submit" className="add-btn">
          Add Movie
        </button>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
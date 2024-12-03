import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchBooks } from "../redux/slices/bookSlice";
import "./BookForm.css";

const BookForm = ({ bookToEdit, onCancel }) => {
  const [book, setBook] = useState(
    bookToEdit || {
      title: "",
      author: "",
      genre: "",
      year: "",
      isbn: "",
      image: "",
    }
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!localStorage.getItem("token")) {
  //     alert("You are not authorized to perform this action.");
  //     return;
  //   }

  //   try {
  //     const response = bookToEdit
  //       ? await axios.put(
  //           `http://localhost:5000/books/${bookToEdit._id}`,
  //           book,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${localStorage.getItem("token")}`,
  //             },
  //           }
  //         )
  //       : await axios.post(`http://localhost:5000/books`, book, {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         });

  //     console.log("Response:", response.data);
  //     alert(`Book ${bookToEdit ? "updated" : "added"} successfully!`);
  //     dispatch(fetchBooks());
  //     onCancel();
  //   } catch (error) {
  //     console.error("Error details:", error);
  //     alert(
  //       error.response?.data?.message ||
  //         "Failed to submit the book. Please check your input and try again."
  //     );
  //   }
  // };

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit); // Set form values when editing
    } else {
      setBook({
        title: "",
        author: "",
        genre: "",
        year: "",
        isbn: "",
        image: "",
      }); // Reset form on cancel
    }
  }, [bookToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = bookToEdit
        ? await axios.put(`http://localhost:5000/books/${bookToEdit._id}`, book)
        : await axios.post(`http://localhost:5000/books`, book);

      console.log("Response:", response.data);
      alert(`Book ${bookToEdit ? "updated" : "added"} successfully!`);
      dispatch(fetchBooks());
      onCancel();
    } catch (error) {
      console.error("Error details:", error.response || error);
      alert(error.response?.data?.message || "Failed to submit the book.");
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Year</label>
        <input
          type="number"
          name="year"
          value={book.year}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>ISBN</label>
        <input
          type="text"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={book.image}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {bookToEdit ? "Update" : "Add"} Book
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default BookForm;

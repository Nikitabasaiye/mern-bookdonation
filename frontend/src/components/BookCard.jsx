import React from "react";
import "./BookCard.css";

const BookCard = ({ book }) => {
  if (!book) {
    return <div>No Book Data</div>; // Fallback if book is undefined
  }

  const { title, author, genre, year, image } = book;
  //   return (
  //     <div className="card">
  //       <img
  //         src={book.image}
  //         className="card-img-top"
  //         alt={book.title}
  //         style={{ height: "200px", objectFit: "cover" }}
  //       />
  //       <div className="card-body">
  //         <h5 className="card-title">{book.title}</h5>
  //         <p className="card-text">Author: {book.author}</p>
  //         <p className="card-text">Genre: {book.genre}</p>
  //         <p className="card-text">Year: {book.year}</p>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="book-card">
      <img
        src={image || "https://via.placeholder.com/150"}
        alt={title || "Book Image"}
        className="book-image"
      />
      <div className="book-details">
        <h3>{title || "Unknown Title"}</h3>
        <p>
          <strong>Author:</strong> {author || "Unknown Author"}
        </p>
        <p>
          <strong>Genre:</strong> {genre || "Unknown Genre"}
        </p>
        <p>
          <strong>Year:</strong> {year || "Unknown Year"}
        </p>
      </div>
    </div>
  );
};

export default BookCard;

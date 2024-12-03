// import React from 'react';

// const BookTable = ({ books, onEdit, onDelete }) => {
//   return (
//     <table className="table table-striped">
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Author</th>
//           <th>Genre</th>
//           <th>Year</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {books.map((book) => (
//           <tr key={book._id}>
//             <td>{book.title}</td>
//             <td>{book.author}</td>
//             <td>{book.genre}</td>
//             <td>{book.year}</td>
//             <td>
//               <button className="btn btn-warning" onClick={() => onEdit(book)}>
//                 Edit
//               </button>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => onDelete(book._id)}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default BookTable;

import React from "react";
import "./BookTable.css";

const BookTable = ({ books, onEdit, onDelete }) => {
  if (!Array.isArray(books) || books.length === 0) {
    return <div className="no-data">No books available</div>;
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr className="text-table">
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book._id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.year}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => onEdit(book)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;

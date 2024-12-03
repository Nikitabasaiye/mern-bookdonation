// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchBooks } from "../redux/slices/bookSlice";
// import BookForm from "../components/BookForm";
// import BookTable from "../components/BookTable";
// import axios from "axios";

// const Admin = () => {
//   const dispatch = useDispatch();
//   const books = useSelector((state) => state.books.books);
//   const [editingBook, setEditingBook] = useState(null);

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   const handleEdit = (book) => {
//     setEditingBook(book);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`/books/${id}`, {
//       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//     });
//     dispatch(fetchBooks());
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Admin Panel</h1>
//       {editingBook ? (
//         <BookForm
//           bookToEdit={editingBook}
//           onCancel={() => setEditingBook(null)}
//         />
//       ) : (
//         <BookForm onCancel={() => setEditingBook(null)} />
//       )}
//       <BookTable books={books} onEdit={handleEdit} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default Admin;

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchBooks } from "../redux/slices/bookSlice";
// import BookForm from "../components/BookForm";
// import BookTable from "../components/BookTable";
// import axios from "axios";
// import "./Admin.css";

// const Admin = () => {
//   const dispatch = useDispatch();
//   const books = useSelector((state) => state.books.books);
//   const [editingBook, setEditingBook] = useState(null);

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   const handleEdit = (book) => {
//     setEditingBook(book);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`/books/${id}`, {
//       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//     });
//     dispatch(fetchBooks());
//   };

//   return (
//     <div className="admin-container">
//       <h1 className="admin-title">Admin Panel</h1>
//       <div className="form-section">
//         {editingBook ? (
//           <BookForm
//             bookToEdit={editingBook}
//             onCancel={() => setEditingBook(null)}
//           />
//         ) : (
//           <BookForm onCancel={() => setEditingBook(null)} />
//         )}
//       </div>
//       <div className="table-section">
//         <BookTable books={books} onEdit={handleEdit} onDelete={handleDelete} />
//       </div>
//     </div>
//   );
// };

// export default Admin;

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchBooks } from "../redux/slices/bookSlice";
// import BookForm from "../components/BookForm";
// import BookTable from "../components/BookTable";
// import axios from "axios";
// import "./Admin.css";

// const Admin = () => {
//   const dispatch = useDispatch();
//   const books = useSelector((state) => state.books.books);
//   const [editingBook, setEditingBook] = useState(null);

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   const handleEdit = (book) => {
//     setEditingBook(book);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`/books/${id}`, {
//       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//     });
//     dispatch(fetchBooks());
//   };

//   if (!Array.isArray(books)) {
//     return <div>Failed to load books data.</div>;
//   }

//   return (
//     <div className="admin-container">
//       <h1 className="admin-title">Admin Panel</h1>
//       <div className="form-section">
//         {editingBook ? (
//           <BookForm
//             bookToEdit={editingBook}
//             onCancel={() => setEditingBook(null)}
//           />
//         ) : (
//           <BookForm onCancel={() => setEditingBook(null)} />
//         )}
//       </div>
//       <div className="table-section">
//         <BookTable books={books} onEdit={handleEdit} onDelete={handleDelete} />
//       </div>
//     </div>
//   );
// };

// export default Admin;
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/slices/bookSlice";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";
import axios from "axios";
import "./Admin.css"; // Import the custom CSS for styling

const Admin = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleEdit = (book) => {
    setEditingBook(book);
  };
  // const handleDelete = async (id) => {
  //   await axios.delete(`/books/${id}`, {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   });
  //   dispatch(fetchBooks());
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/books/${id}`, {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     });
  //     dispatch(fetchBooks()); // Refresh the list of books after successful deletion
  //   } catch (error) {
  //     console.error("Error deleting book:", error);
  //     alert(
  //       error.response?.data?.message ||
  //         "Failed to delete the book. Please try again."
  //     );
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(fetchBooks());
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete the book. Please try again.");
    }
  };
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Panel</h1>
      <div className="form-section">
        {editingBook ? (
          <BookForm
            bookToEdit={editingBook}
            onCancel={() => setEditingBook(null)}
          />
        ) : (
          <BookForm onCancel={() => setEditingBook(null)} />
        )}
      </div>
      <div className="table-section">
        <BookTable books={books} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Admin;

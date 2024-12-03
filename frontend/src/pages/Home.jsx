// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchBooks } from '../redux/slices/bookSlice';
// import BookCard from '../components/BookCard';

// const Home = () => {
//   const dispatch = useDispatch();
//   const books = useSelector((state) => state.books.books);

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   return (
//     <div className="container mt-4">
//       <h1>Available Books</h1>
//       <div className="row">
//         {books.map((book) => (
//           <div key={book._id} className="col-md-4">
//             <BookCard book={book} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/slices/bookSlice';
import BookCard from '../components/BookCard';

const Home = () => {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  if (!Array.isArray(books)) {
    return <p>Error: Books data is not in an array format.</p>;
  }

  if (books.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <div className="container mt-4">
      <h1>Available Books</h1>
      <div className="row">
        {books.map((book) => (
          <div key={book._id} className="col-md-4">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

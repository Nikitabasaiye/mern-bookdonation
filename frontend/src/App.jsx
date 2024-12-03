import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Home from './pages/Home';
// import Admin from './pages/Admin';
// import Login from './pages/Login';
// import Navbar from './components/Navbar';
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";

const App = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/books" element={<Admin />} /> */}

        {/* <Route
          path="/books"
          element={isAuthenticated ? <Admin /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

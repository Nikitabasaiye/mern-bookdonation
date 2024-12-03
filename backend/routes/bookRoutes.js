const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  addBook,
  updateBook,
  getBooks,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/", authMiddleware, addBook);

router.get("/", getBooks);

router.put("/:id", authMiddleware, updateBook);

router.delete("/:id", authMiddleware, deleteBook);

module.exports = router;

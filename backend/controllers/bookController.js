const Book = require("../model/Book");

// exports.addBook = async (req, res) => {
//   const { title, author, genre, year, isbn, image } = req.body;
//   try {
//     const book = new Book({ title, author, genre, year, isbn, image });
//     await book.save();
//     res.status(201).json(book);
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };
exports.addBook = async (req, res) => {
  const { title, author, genre, year, isbn, image } = req.body;
  try {
    const book = new Book({ title, author, genre, year, isbn, image });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, year, isbn, image } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, genre, year, isbn, image },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    res.json({ msg: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

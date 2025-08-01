import { Router } from "express";
import * as BooksController from "./controllers/books-controller";
import * as AuthorsController from "./controllers/authors-controller";

const router = Router();

// Book routes
router.get("/books", BooksController.getBooks);
router.post("/books", BooksController.postBook);
router.get("/books/:id", BooksController.getBookById);
router.patch("/books/:id", BooksController.updateBook);
router.delete("/books/:id", BooksController.deleteBook);

// Author routes
router.get("/authors", AuthorsController.getAuthors);

export default router;
import { BookModel } from "../models/book-model";
import * as BookRepository from "../repositories/books-repository";
import * as HttpResponse from "../utils/http-helper";

export const getBooksService = async () => {
  const data = await BookRepository.findAllBooks();
  if (data && data.length > 0) {
    return await HttpResponse.ok(data);
  }
  return await HttpResponse.noContent();
};

export const getBookByIdService = async (id: number) => {
  const data = await BookRepository.findBookById(id);
  if (data) {
    return await HttpResponse.ok(data);
  }
  return await HttpResponse.noContent();
};

export const createBookService = async (book: Omit<BookModel, 'id'>) => {
  if (!book || !book.title || !book.authorId) {
    return HttpResponse.badRequest({ message: "Title and authorId are required." });
  }
  const newBook = await BookRepository.insertBook(book);
  return await HttpResponse.created(newBook);
};

export const deleteBookService = async (id: number) => {
  const isDeleted = await BookRepository.deleteOneBook(id);
  if (isDeleted) {
    return await HttpResponse.ok({ message: `Book with id ${id} deleted.` });
  }
  return HttpResponse.badRequest({ message: `Book with id ${id} not found.` });
};

export const updateBookService = async (id: number, book: Partial<BookModel>) => {
  const updatedBook = await BookRepository.findAndModifyBook(id, book);
  if (!updatedBook) {
    return await HttpResponse.badRequest({ message: `Book with id ${id} not found.` });
  }
  return await HttpResponse.ok(updatedBook);
};
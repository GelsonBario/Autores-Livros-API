import { BookModel } from "../models/book-model";
import fs from "fs/promises";
import path from "path";

const booksFilePath = path.resolve(__dirname, "..", "data", "books.json");

const readBooksFromFile = async (): Promise<BookModel[]> => {
  try {
    const data = await fs.readFile(booksFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading books database:", error);
    return [];
  }
};

const writeBooksToFile = async (books: BookModel[]): Promise<void> => {
  try {
    await fs.writeFile(booksFilePath, JSON.stringify(books, null, 2));
  } catch (error) {
    console.error("Error writing to books database:", error);
  }
};

export const findAllBooks = async (): Promise<BookModel[]> => {
  return await readBooksFromFile();
};

export const findBookById = async (id: number): Promise<BookModel | undefined> => {
  const books = await readBooksFromFile();
  return books.find(book => book.id === id);
};

export const insertBook = async (book: Omit<BookModel, 'id'>): Promise<BookModel> => {
  const books = await readBooksFromFile();
  const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
  const newBook = { ...book, id: newId };
  books.push(newBook);
  await writeBooksToFile(books);
  return newBook;
};

export const deleteOneBook = async (id: number): Promise<boolean> => {
  let books = await readBooksFromFile();
  const initialLength = books.length;
  books = books.filter(b => b.id !== id);

  if (books.length < initialLength) {
    await writeBooksToFile(books);
    return true;
  }
  return false;
};

export const findAndModifyBook = async (id: number, partialBook: Partial<BookModel>): Promise<BookModel | null> => {
  const books = await readBooksFromFile();
  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex !== -1) {
    // Ensure ID is not changed
    delete partialBook.id; 
    books[bookIndex] = { ...books[bookIndex], ...partialBook };
    await writeBooksToFile(books);
    return books[bookIndex];
  }

  return null;
};
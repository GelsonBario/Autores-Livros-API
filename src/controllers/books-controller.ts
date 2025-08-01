import { Request, Response } from "express";
import * as service from "../services/books-service";

export const getBooks = async (req: Request, res: Response) => {
  const httpResponse = await service.getBooksService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getBookById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const httpResponse = await service.getBookByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postBook = async (req: Request, res: Response) => {
  const httpResponse = await service.createBookService(req.body);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deleteBook = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const httpResponse = await service.deleteBookService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updateBook = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const httpResponse = await service.updateBookService(id, req.body);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
import { Request, Response } from "express";
import * as service from "../services/authors-service";

export const getAuthors = async (req: Request, res: Response) => {
  const httpResponse = await service.getAuthorsService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

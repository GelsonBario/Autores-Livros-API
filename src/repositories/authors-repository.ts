import { AuthorModel } from "../models/author-model";
import fs from "fs/promises";
import path from "path";

const authorsFilePath = path.resolve(__dirname, "..", "data", "authors.json");

export const findAllAuthors = async (): Promise<AuthorModel[]> => {
  try {
    const data = await fs.readFile(authorsFilePath, "utf-8");
    const authors: AuthorModel[] = JSON.parse(data);
    return authors;
  } catch (error) {
    console.error("Error reading authors database:", error);
    return [];
  }
};
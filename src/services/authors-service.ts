import * as HttpResponse from "../utils/http-helper";
import * as repository from "../repositories/authors-repository";

export const getAuthorsService = async () => {
  const data = await repository.findAllAuthors();
  if (data && data.length > 0) {
    return HttpResponse.ok(data);
  }
  return HttpResponse.noContent();
};
import { Repository } from "../interfaces";

export function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export const getFavAction = (repository: Repository) => {
  return {
    id: repository.id,
    fullname: repository.full_name,
  };
};

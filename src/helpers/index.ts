import { Repository } from "../interfaces";

export const getFavAction = (repository: Repository) => {
  return {
    id: repository.id,
    fullname: repository.full_name,
  };
};

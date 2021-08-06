import axios from "axios";
import { SORT_TYPES } from "../../constants/sort";

export const getData = async (searchValue: string, sort: string) => {
  let searchString =
    "https://api.github.com/search/repositories?q=" + searchValue;

  if (sort !== SORT_TYPES.BEST_MATCH) {
    searchString = searchString + "&sort=" + sort;
  }

  const { items = [] } = (await axios.get(searchString)).data || {};

  const filterData = items.map((repository: any) => {
    return {
      id: repository.id,
      name: repository.name,
      full_name: repository.full_name,
      avatar: repository.owner.avatar_url,
      url: repository.html_url,
      stars: repository.stargazers_count,
      description: repository.description,
      updated_at: repository.updated_at,
    };
  });
  return filterData;
};

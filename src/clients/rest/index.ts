import axios from "axios";
import { SORT_TYPES } from "../../constants/sort";
import { GithubResponse, Repository } from "../../interfaces";

export const getData = async (searchValue: string, sort: string) => {
  let searchString =
    "https://api.github.com/search/repositories?q=" + searchValue;

  if (sort !== SORT_TYPES.BEST_MATCH) {
    const sortOrder = sort === SORT_TYPES.MOST_STARS ? "desc" : "asc";
    searchString = searchString + "&sort=stars&order=" + sortOrder;
  }

  const { items = [] } =
    (await axios.get<GithubResponse>(searchString)).data || {};

  const filterData: Repository[] = items.map((repository: any) => {
    return {
      id: repository.id,
      name: repository.name,
      full_name: repository.full_name,
      avatar: repository.owner.avatar_url,
      url: repository.html_url,
      stars: repository.stargazers_count,
      description: repository.description,
    };
  });
  return filterData;
};

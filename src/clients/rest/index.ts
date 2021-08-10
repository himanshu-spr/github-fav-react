import axios from "axios";
import { SORT_LABELS } from "../../components/HomePage/RepositoryList/SortDropdown";
import {
  FavoriteData,
  GithubResponse,
  Repository,
  RepoResponse,
} from "../../interfaces";

export const getData = async (searchValue: string, sort: string) => {
  let searchString =
    "https://api.github.com/search/repositories?q=" + searchValue;

  if (sort !== SORT_LABELS.BEST_MATCH) {
    const sortOrder = sort === SORT_LABELS.MOST_STARS ? "desc" : "asc";
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

export const getFavData = async (favorite: FavoriteData) => {
  let searchString = "https://api.github.com/repos/" + favorite.fullname;

  const res = (await axios.get<RepoResponse>(searchString)).data || {};

  const filterData: Repository = {
    id: res.id,
    name: res.name,
    full_name: res.full_name,
    avatar: res.owner.avatar_url,
    url: res.html_url,
    stars: res.stargazers_count,
    description: res.description,
  };
  return filterData;
};

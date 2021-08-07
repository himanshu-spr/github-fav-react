import { useQuery } from "react-query";
import axios from "axios";
import { SORT_TYPES } from "../constants/sort";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";

const getSearchData = (state: RootState) => state.search;
const getSortData = (state: RootState) => state.sort;

export default function useRepositories() {
  const searchData = useSelector(getSearchData);
  const sortData = useSelector(getSortData);
  let searchString =
    "https://api.github.com/search/repositories?q=" + searchData.searchValue;

  if (sortData.sortValue !== SORT_TYPES.BEST_MATCH) {
    searchString = searchString + "&sort=" + sortData.sortValue;
  }

  const { status, data, error } = useQuery(
    ["repositories", searchData.searchValue, sortData.sortValue],
    () => axios.get(searchString).then((res) => res.data),
    {
      enabled: searchData.searchValue !== "",
    }
  );
  let filteredData = [];

  if (data && data.items) {
    filteredData = data.items.map((repository: any) => {
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
  }
  return { status, data: filteredData, error };
}

import { useQuery } from "react-query";
import { useMemo } from "react";
import axios from "axios";
import { SORT_LABELS } from "../components/HomePage/RepositoryList/SortDropdown";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";
import { RepoResponse } from "../interfaces";

const getSearchData = (state: RootState) => state.search;
const getSortData = (state: RootState) => state.sort;

export default function useRepositories() {
  const searchData = useSelector(getSearchData);
  const sortData = useSelector(getSortData);
  let searchString =
    "https://api.github.com/search/repositories?q=" + searchData.searchValue;

  if (sortData.sortValue !== SORT_LABELS.BEST_MATCH) {
    const sortType =
      sortData.sortValue === SORT_LABELS.MOST_STARS ? "desc" : "asc";
    searchString = searchString + "&sort=stars&order=" + sortType;
  }

  const { isError, isLoading, data, error } = useQuery<RepoResponse[], Error>(
    ["repositories", searchData.searchValue, sortData.sortValue],
    () => axios.get(searchString).then((res) => res.data.items),
    {
      enabled: searchData.searchValue !== "",
    }
  );
  const filteredData = useMemo(
    () =>
      (data || []).map((repository) => {
        return {
          id: repository.id,
          name: repository.name,
          full_name: repository.full_name,
          avatar: repository.owner.avatar_url,
          url: repository.html_url,
          stars: repository.stargazers_count,
          description: repository.description,
        };
      }),
    [data]
  );

  return { isError, isLoading, data: filteredData, error };
}

import { useQuery } from "react-query";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";
import { Repositories } from "../interfaces";
import { graphQLClient } from "../helpers";
import { GET_REPOSITORIES } from "../queries";

const getSearchData = (state: RootState) => state.search;

export default function useRepositories() {
  const searchData = useSelector(getSearchData);

  return useQuery<Repositories[], Error>(
    ["repositories", searchData.searchValue],
    async () => {
      const data = await graphQLClient.request(GET_REPOSITORIES, {
        queryString: searchData.searchValue,
      });

<<<<<<< HEAD
      return data?.search?.edges;
    },
=======
  const { isError, isLoading, data, error } = useQuery<RepoResponse[], Error>(
    ["repositories", searchData.searchValue, sortData.sortValue],
    () => axios.get(searchString).then((res) => res.data.items),
>>>>>>> react-query
    {
      enabled: !!searchData.searchValue,
    }
  );
<<<<<<< HEAD
=======
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
>>>>>>> react-query
}

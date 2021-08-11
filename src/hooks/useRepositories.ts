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

      return data?.search?.edges;
    },
    {
      enabled: !!searchData.searchValue,
    }
  );
}

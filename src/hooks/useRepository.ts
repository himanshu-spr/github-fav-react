import { useQuery } from "react-query";
import { graphQLClient } from "../helpers";
import { GET_REPOSITORY } from "../queries";
import { FavoriteData, Repository } from "../interfaces";

export default function useRepository(favorite: FavoriteData) {
  return useQuery<Repository, Error>(
    ["repository", favorite.id],
    async () => {
      const { repository } = await graphQLClient.request(GET_REPOSITORY, {
        name: favorite.name,
        owner: favorite.owner,
      });

<<<<<<< HEAD
      return repository;
    },
    {
      enabled: !!favorite.id,
    }
  );
=======
  const { isError, isLoading, data, error } = useQuery<RepoResponse, Error>(
    ["repository", favorite.fullname],
    () => axios.get(searchString).then((res) => res.data)
  );

  const filteredData = useMemo(
    () => ({
      id: data?.id,
      name: data?.name,
      full_name: data?.full_name,
      avatar: data?.owner?.avatar_url,
      url: data?.html_url,
      stars: data?.stargazers_count,
      description: data?.description,
    }),
    [data]
  );
  return { isError, isLoading, data: filteredData, error };
>>>>>>> react-query
}

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

      return repository;
    },
    {
      enabled: !!favorite.id,
    }
  );
}

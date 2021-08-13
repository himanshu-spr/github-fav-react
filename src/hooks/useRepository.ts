import { useQuery } from "react-query";
import axios from "axios";
import { useMemo } from "react";
import { FavoriteData, RepoResponse } from "../interfaces";

export default function useRepository(favorite: FavoriteData) {
  let searchString = "https://api.github.com/repos/" + favorite.fullname;

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
}

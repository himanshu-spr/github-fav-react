import { useQuery } from "react-query";
import axios from "axios";
import { FavoriteData, RepoResponse, Repository } from "../interfaces";

export default function useRepository(favorite: FavoriteData) {
  let searchString = "https://api.github.com/repos/" + favorite.fullname;

  const { status, data, error } = useQuery(
    ["repository", favorite.fullname],
    () => axios.get<RepoResponse>(searchString).then((res) => res.data)
  );

  let filteredData: Repository | null = null;

  if (data) {
    filteredData = {
      id: data.id,
      name: data.name,
      full_name: data.full_name,
      avatar: data.owner.avatar_url,
      url: data.html_url,
      stars: data.stargazers_count,
      description: data.description,
    };
  }
  return { status, data: filteredData, error };
}

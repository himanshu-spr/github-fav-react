export interface Repository {
  id: number;
  name: string;
  full_name: string;
  avatar: string;
  url: string;
  stars: number;
  description: string;
}

export interface RepoResponse {
  id: number;
  name: string;
  full_name: string;
  owner: {
    avatar_url: string;
  };
  html_url: string;
  description: string;
  stargazers_count: number;
}

export interface GithubResponse {
  total_count: number;
  incomplete_results: boolean;
  items: RepoResponse[];
}

interface StoreAction {
  type: string;
  payload: any;
}

export interface RepositoryListItemProps {
  repository: Repository;
  isFavorite: boolean;
}

export interface RepositoryAction extends StoreAction {
  payload: Repository[] | string;
}

export interface ProductsDispatch {
  type: string;
  payload: Repository[] | string;
}

export interface RepositoryState {
  loading: boolean;
  repository: Repository[];
  error: string;
}

export interface RepositoryListProps {
  repository: Repository[];
}

export interface FavoritesAction extends StoreAction {
  payload: FavoriteData;
}

export interface SearchValueAction extends StoreAction {
  payload: string;
}

export interface SearchValueState {
  searchValue: string;
}

export interface FavoriteData {
  id: number;
  fullname: string;
}

export interface FavoritesState {
  favorites: FavoriteData[];
}

export interface SortState {
  sortValue: string;
}

export interface SearchState {
  searchValue: string;
}

export interface FavoriteListItemProps {
  favorite: FavoriteData;
}

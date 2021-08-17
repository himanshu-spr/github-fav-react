export interface Repository {
  id: string;
  description: string;
  stargazerCount: number;
  url: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
  name: string;
  nameWithOwner: string;
}

export interface Repositories {
  node: Repository;
}

export interface GithubResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
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
  repositories: Repositories[];
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
  id: string;
  name: string;
  owner: string;
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

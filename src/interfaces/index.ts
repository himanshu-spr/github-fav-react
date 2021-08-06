export interface Repository {
  id: number;
  name: string;
  full_name: string;
  avatar: string;
  url: string;
  stars: number;
  description: string;
  updated_at: string;
}

export interface GithubResponse {
  total_count: number;
  incomplete_results: boolean;
  items: any[];
}

interface StoreAction {
  type: string;
  payload: any;
}

export interface RepositoryListItemProps {
  repository: Repository;
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
  payload: Repository;
}

export interface SearchValueAction extends StoreAction {
  payload: string;
}

export interface SearchValueState {
  searchValue: string;
}

export interface FavoritesState {
  favorites: Repository[];
}

export interface SortState {
  sortValue: string;
}

export interface SearchState {
  searchValue: string;
}

export interface FavoriteListItemProps {
  favorite: Repository;
}

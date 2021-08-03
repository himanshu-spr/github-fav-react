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

export interface RepositoryListItemProps {
  repository: Repository;
}

export interface RepositoryAction {
  type: string;
  payload: Repository[] | string;
}

export interface ProductsDispatch {
  type: string;
  payload: Repository[] | string;
}

export interface RepositoryState {
  loading: string;
  repository: Repository[];
  error: string;
}

export interface RepositoryListProps {
  repository: Repository[];
}

export interface FavoritesAction {
  type: string;
  payload: Repository;
}

export interface FavoritesState {
  favorites: Repository[];
}

export interface FavoriteListItemProps {
  favorite: Repository;
}

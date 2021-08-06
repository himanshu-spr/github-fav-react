import { RootState } from "../redux/rootReducer";

export async function save(state: RootState, key: string) {
  const serializedState = JSON.stringify(state.favorites);
  localStorage.setItem(key, serializedState);
}

export function load(key: string, defaultValue: any = "") {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) return defaultValue;

    const jsonState = JSON.parse(serializedState);
    return jsonState;
  } catch (e) {
    throw e;
  }
}

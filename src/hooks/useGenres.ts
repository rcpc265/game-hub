import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

/**
 * @description
 * Hook to fetch genres.
 * @returns {Object} An object containing the fetched data, any error occurred, and the loading state.
 * @example
 * const { data, error, isLoading } = useGenres();
 */
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;

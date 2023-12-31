import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

/**
 * @description
 * Hook to fetch games
 * @param {Object} gameQuery - The query parameters for fetching games.
 * @param {Genre | null} gameQuery.genre - The genre of the games to fetch.
 * @param {Platform | null} gameQuery.platform - The platform of the games to fetch.
 * @param {string} gameQuery.sortOrder - The order in which to sort the fetched games.
 * @returns {Object} An object containing the fetched data, any error occurred, and the loading state.
 * @example
 * const { data, error, isLoading } = useGames(gameQuery);
 */

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );
export default useGames;

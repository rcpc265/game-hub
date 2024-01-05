import { FetchResponse } from "@/services/api-client";
import gameService from "@/services/gameService";
import { Game } from "@/entities/Game";
import useGameQueryStore from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";

const useAllGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    initialPageParam: 1,
  });
};

export default useAllGames;

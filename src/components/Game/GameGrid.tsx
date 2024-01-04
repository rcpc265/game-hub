import { GameCard, GameCardSkeleton } from "@/components/Game";
import useGames, { GameQuery } from "@/hooks/useGames";
import { HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const Skeletons = ({ count = 20 }) =>
  Array.from({ length: count }).map((_, index) => (
    <GameCardSkeleton key={index} />
  ));

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, fetchNextPage, hasNextPage, isLoading } =
    useGames(gameQuery);
  const games = data?.pages.flatMap((page) => page.results);

  if (error) return <Text>{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={games?.length || 0}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <HStack justifyContent="center">
          {hasNextPage && (
            <Spinner
              mt={10}
              mb="300px"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="gray.500"
              size="xl"
            />
          )}
        </HStack>
      }
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading && <Skeletons />}
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
export default GameGrid;

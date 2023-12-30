import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCard from "./GameCard";
import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 10 }).map((_, index) => (
    <GameCardSkeleton key={index} />
  ));

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading && skeletons}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;

import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard, GameCardSkeleton } from "@/components/Game";
import useGames, { GameQuery } from "@/hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 20 }).map((_, index) => (
    <GameCardSkeleton key={index} />
  ));

  if (error) return <Text>{error}</Text>

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
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

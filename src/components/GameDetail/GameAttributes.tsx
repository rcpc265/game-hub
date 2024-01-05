import { CriticScore } from "@/components/Game";
import GameInfoCard from "@/components/GameDetail/GameInfoCard";
import { Game } from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 2, lg: 4 }} mt={8} spacing={3} as="dl">
      <GameInfoCard title="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameInfoCard>
      <GameInfoCard title="Metascore">
        <CriticScore score={game.metacritic} />
      </GameInfoCard>
      <GameInfoCard title="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameInfoCard>
      <GameInfoCard title="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameInfoCard>
    </SimpleGrid>
  );
};
export default GameAttributes;

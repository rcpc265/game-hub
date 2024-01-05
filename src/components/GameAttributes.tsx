import { CriticScore } from "@/components/Game";
import InfoCard from "@/components/InfoCard";
import { Game } from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 2, lg: 4 }} mt={8} spacing={3} as="dl">
      <InfoCard title="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </InfoCard>
      <InfoCard title="Metascore">
        <CriticScore score={game.metacritic} />
      </InfoCard>
      <InfoCard title="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </InfoCard>
      <InfoCard title="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </InfoCard>
    </SimpleGrid>
  );
};
export default GameAttributes;

import {
  CriticScore,
  GameCardContainer,
  PlatformIconList,
} from "@/components/Game";
import type { Game } from "@/hooks/useGames";
import transformToCroppedImageUrl from "@/services/image-url";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image h="170px" src={transformToCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl" noOfLines={1}>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};
export default GameCard;

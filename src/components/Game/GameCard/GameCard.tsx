import {
  CriticScore,
  GameCardContainer,
  PlatformIconList,
} from "@/components/Game";
import type { Game } from "@/services/gameService";
import transformToCroppedImageUrl from "@/services/image-url";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image
          min-h="170px"
          src={transformToCroppedImageUrl(game.background_image)}
        />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl" noOfLines={1}>
            {game.name}
          </Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};
export default GameCard;

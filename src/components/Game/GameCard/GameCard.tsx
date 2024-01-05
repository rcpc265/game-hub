import {
  CriticScore,
  GameCardContainer,
  PlatformIconList,
} from "@/components/Game";
import type { Game } from "@/entities/Game";
import transformToCroppedImageUrl from "@/services/image-url";
import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Link to={"/games/" + game.slug}>
          <Box minH="170px">
            <Skeleton isLoaded={!!game.background_image}>
              <Image src={transformToCroppedImageUrl(game.background_image)} />
            </Skeleton>
          </Box>
        </Link>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl" noOfLines={1}>
            <Link to={"/games/" + game.slug}>{game.name}</Link>
          </Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};
export default GameCard;

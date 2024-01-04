import { GameQuery } from "@/hooks/useGames";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genreName = useGenre(gameQuery.genreId)?.name || "";
  const platformName = usePlatform(gameQuery.platformId)?.name || "";

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${platformName} ${genreName} Games`}
    </Heading>
  );
};
export default GameHeading;

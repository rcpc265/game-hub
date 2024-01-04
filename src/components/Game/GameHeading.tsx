import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);
  const genreName = useGenre(gameQuery.genreId)?.name || "";
  const platformName = usePlatform(gameQuery.platformId)?.name || "";

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${platformName} ${genreName} Games`}
    </Heading>
  );
};
export default GameHeading;

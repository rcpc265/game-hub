import { GameQuery } from "@/hooks/useGames";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const {
    data: { results: genres },
  } = useGenres();

  const {
    data: { results: platforms },
  } = usePlatforms();

  const genreName =
    genres.find((genre) => genre.id === gameQuery.genreId)?.name ?? "";
  const platformName =
    platforms.find((p) => p.id === gameQuery.platformId)?.name ?? "";

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${platformName} ${genreName} Games`}
    </Heading>
  );
};
export default GameHeading;

import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import useGame from "@/hooks/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Box mt={3}>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Box>
      <GameAttributes game={game} />
    </>
  );
};
export default GameDetailPage;

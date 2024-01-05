import useIsOverflow from "@/hooks/useIsOverflow";
import type { Genre } from "@/entities/Genre";
import transformToCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import {
  Box,
  Button,
  HStack,
  Image,
  ListItem,
  Tooltip,
} from "@chakra-ui/react";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setGenreId = useGameQueryStore((state) => state.setGenreId);

  const { isOverflow, textRef } = useIsOverflow([genre.name]);

  return (
    <ListItem paddingY="5px">
      <HStack>
        <Image
          objectFit="cover"
          boxSize="32px"
          borderRadius={8}
          src={transformToCroppedImageUrl(genre.image_background)}
        />
        <Button
          fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
          onClick={() => setGenreId(genre.id)}
          fontSize="lg"
          variant="link"
        >
          {isOverflow ? (
            <Tooltip
              label={genre.name}
              aria-label={genre.name}
              color="white"
              bg="gray.600"
            >
              <Box ref={textRef} isTruncated>
                {genre.name}
              </Box>
            </Tooltip>
          ) : (
            <Box ref={textRef} isTruncated>
              {genre.name}
            </Box>
          )}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreItem;

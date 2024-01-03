import useIsOverflow from "@/hooks/useIsOverflow";
import type { Genre } from "@/services/genreService";
import transformToCroppedImageUrl from "@/services/image-url";
import {
  Box,
  Button,
  HStack,
  Image,
  ListItem,
  Tooltip,
} from "@chakra-ui/react";
import { GenreListProps } from "./GenreList";

interface Props extends GenreListProps {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreItem = ({ genre, onSelectGenre, selectedGenreId }: Props) => {
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
          onClick={() => onSelectGenre(genre)}
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

import { Genre } from "@/hooks/useGenres";
import transformToCroppedImageUrl from "@/services/image-url";
import {
  ListItem,
  HStack,
  Image,
  Button,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { GenreListProps } from "./GenreList";
import useIsOverflow from "@/hooks/useIsOverflow";

interface Props extends GenreListProps {
  genre: Genre;
}

const GenreItem = ({ genre, onSelectGenre, selectedGenre }: Props) => {
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
          fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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

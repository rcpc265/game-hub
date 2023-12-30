import { Genre } from "@/hooks/useGenres";
import transformToCroppedImageUrl from "@/services/image-url";
import { ListItem, HStack, Image, Button } from "@chakra-ui/react";
import { GenreListProps } from "./GenreList";

interface Props extends GenreListProps {
  genre: Genre;
}

const GenreItem = ({ genre, onSelectGenre, selectedGenre }: Props) => (
  <ListItem paddingY="5px">
    <HStack>
      <Image
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
        {genre.name}
      </Button>
    </HStack>
  </ListItem>
);

export default GenreItem;

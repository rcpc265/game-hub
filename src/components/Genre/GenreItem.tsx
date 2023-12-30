import { Genre } from "@/hooks/useGenres";
import transformToCroppedImageUrl from "@/services/image-url";
import { ListItem, HStack, Image, Button } from "@chakra-ui/react";

interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
}

const GenreItem = ({ genre, onSelectGenre }: Props) => (
  <ListItem paddingY="5px">
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={transformToCroppedImageUrl(genre.image_background)}
      />
      <Button
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

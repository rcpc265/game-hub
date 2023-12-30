import { Genre } from "@/hooks/useGenres";
import transformToCroppedImageUrl from "@/services/image-url";
import { ListItem, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => (
  <ListItem paddingY="5px">
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={transformToCroppedImageUrl(genre.image_background)}
      />
      <Text fontSize="lg">{genre.name}</Text>
    </HStack>
  </ListItem>
);

export default GenreItem;

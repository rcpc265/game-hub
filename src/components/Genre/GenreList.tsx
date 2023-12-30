import useGenres from "@/hooks/useGenres";
import { List } from "@chakra-ui/react";
import GenreItem from "./GenreItem";
import { GenreItemSkeleton } from ".";

const GenreList = () => {
  const { data: genres, isLoading } = useGenres();
  const skeletons = Array.from({ length: 20 }).map((_, index) => (
    <GenreItemSkeleton key={index} />
  ));

  return (
    <List>
      {isLoading && skeletons}
      {genres.map((genre) => (
        <GenreItem key={genre.id} genre={genre}></GenreItem>
      ))}
    </List>
  );
};
export default GenreList;

import useGenres, { Genre } from "@/hooks/useGenres";
import { List } from "@chakra-ui/react";
import GenreItem from "./GenreItem";
import { GenreItemSkeleton } from ".";

export interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data: genres, isLoading } = useGenres();
  const skeletons = Array.from({ length: 20 }).map((_, index) => (
    <GenreItemSkeleton key={index} />
  ));

  return (
    <List>
      {isLoading && skeletons}
      {genres.map((genre) => (
        <GenreItem
          selectedGenre={selectedGenre}
          onSelectGenre={onSelectGenre}
          key={genre.id}
          genre={genre}
        />
      ))}
    </List>
  );
};
export default GenreList;

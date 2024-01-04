import useGenres from "@/hooks/useGenres";
import { Heading, List } from "@chakra-ui/react";
import GenreItem from "./GenreItem";
import { GenreItemSkeleton } from ".";
import type { Genre } from "@/services/genreService";

export interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: GenreListProps) => {
  const { data, isLoading } = useGenres();
  const skeletons = Array.from({ length: 20 }).map((_, index) => (
    <GenreItemSkeleton key={index} />
  ));

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading && skeletons}
        {data?.results.map((genre) => (
          <GenreItem
            selectedGenreId={selectedGenreId}
            onSelectGenre={onSelectGenre}
            key={genre.id}
            genre={genre}
          />
        ))}
      </List>
    </>
  );
};
export default GenreList;

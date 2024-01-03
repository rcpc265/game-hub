import genres from "@/data/genres";
import genreService from "@/services/genreService";
import { useQuery } from "@tanstack/react-query";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;

import genres from "@/data/genres";
import genreService from "@/services/genreService";
import { useQuery } from "@tanstack/react-query";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    initialData: genres,
  });

export default useGenres;

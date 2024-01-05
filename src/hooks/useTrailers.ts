import trailerService from "@/services/trailerService";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameId: number) =>
  useQuery({
    queryKey: ["trailers", gameId],
    queryFn: trailerService(gameId).getAll,
  });

export default useTrailers;

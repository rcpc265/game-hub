import gameService from "@/services/gameService";
import { useQuery } from "@tanstack/react-query";

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => gameService.get(slug),
  });

export default useGame;

import platforms from "@/data/platforms";
import platformService from "@/services/platformService";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll(),
    staleTime: 10 * 1000,
    initialData: platforms,
  });

export default usePlatforms;

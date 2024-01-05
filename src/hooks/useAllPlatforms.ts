import platforms from "@/data/platforms";
import platformService from "@/services/platformService";
import { useQuery } from "@tanstack/react-query";

const useAllPlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    initialData: platforms,
  });

export default useAllPlatforms;

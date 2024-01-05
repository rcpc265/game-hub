import useAllPlatforms from "./useAllPlatforms";

const usePlatform = (id?: number) => {
  const { data } = useAllPlatforms();
  return data?.results.find((platform) => platform.id === id);
};

export default usePlatform;

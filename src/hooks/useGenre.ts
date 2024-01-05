import useAllGenres from "./useAllGenres";

const useGenre = (id?: number) => {
  const { data } = useAllGenres();
  return data?.results.find((p) => p.id === id);
};

export default useGenre;

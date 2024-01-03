import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface InfiniteScrollProps {
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

const useInfiniteScroll = ({
  hasNextPage,
  fetchNextPage,
}: InfiniteScrollProps) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return {
    ref,
  };
};

export default useInfiniteScroll;

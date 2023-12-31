import { useLayoutEffect, useRef, useState } from "react";

/**
 * @description
 * Hook to check if a text is overflowed
 * @param deps
 * @returns
 * @example
 * const { textRef, isOverflow } = useIsOverflow([text]);
 * <div ref={textRef}>{text}</div>
 * {isOverflow && <button>See more</button>}
 * @see https://www.robinwieruch.de/react-custom-hook-check-if-overflow/
 */

const useIsOverflow = (deps: unknown[]) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useLayoutEffect(
    () => {
      const element = textRef.current;
      if (element) {
        const currentTextIsOverflow = element.scrollWidth > element.clientWidth;
        if (currentTextIsOverflow !== isOverflow) {
          setIsOverflow(currentTextIsOverflow);
        }
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps, isOverflow] : [isOverflow]
  );

  return { textRef, isOverflow };
};

export default useIsOverflow;

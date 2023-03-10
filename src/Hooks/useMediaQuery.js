import { useState, useEffect } from "react";

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);
  
    return matches;
  }

export const useIsMedium = () => useMediaQuery('(max-width: 875px)')
export const useIsSmall = () => useMediaQuery('(max-width: 700px)')
export const useIsIphone = () => useMediaQuery('(max-width: 400px)')
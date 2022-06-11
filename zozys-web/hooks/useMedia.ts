import React from "react";

export const useMedia = (query: string): boolean | undefined => {
  const [defaultMedia, setDefaultMedia] = React.useState<MediaQueryList>();

  React.useEffect(() => {
    setDefaultMedia(window.matchMedia(query));
  }, [query]);

  const [state, setState] = React.useState<boolean | undefined>(
    defaultMedia?.matches
  );

  React.useEffect(() => {
    const mql = window.matchMedia(query);

    if (state !== mql.matches) setState(mql.matches);
    else setState(mql.matches);

    const match = () => setState(mql.matches);

    mql.addEventListener("change", match);

    return () => mql.removeEventListener("change", match);
  }, [state, query]);

  return state;
};

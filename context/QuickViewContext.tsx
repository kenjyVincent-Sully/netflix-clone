import { createContext, useState } from "react";
import { MediaType } from "../types/Movie";

export const QuickViewContext = createContext<{
  open: boolean;
  idMovie: number | null;
  mediaType: MediaType;
  handleClick: (id: number | null) => void;
}>({
  open: false,
  idMovie: null,
  mediaType: MediaType.Movie,
  handleClick: () => null,
});

export const QuickViewProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const [idMovie, setIdMovie] = useState<number | null>(null);
  const [mediaType, setMediaType] = useState<MediaType>(MediaType.Movie);

  const handleClick = (id: number | null) => {
    open ? setOpen(false) : setOpen(true);
    setIdMovie(id);
    setMediaType(mediaType);
  };

  return (
    <QuickViewContext.Provider
      value={{ handleClick, open, idMovie, mediaType }}
    >
      {children}
    </QuickViewContext.Provider>
  );
};

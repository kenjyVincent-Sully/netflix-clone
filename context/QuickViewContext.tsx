import { createContext, useState } from "react";

export const QuickViewContext = createContext<{
  open: boolean;
  idMovie: number | null;
  handleClick: (id: number) => void;
}>({ open: false, idMovie: null, handleClick: () => null });

export const QuickViewProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const [idMovie, setIdMovie] = useState<number | null>(null);

  const handleClick = (id: number) => {
    open ? setOpen(false) : setOpen(true);
    setIdMovie(id);
  };

  return (
    <QuickViewContext.Provider value={{ handleClick, open, idMovie }}>
      {children}
    </QuickViewContext.Provider>
  );
};

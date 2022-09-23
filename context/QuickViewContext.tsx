import { createContext, useState } from "react";

export const QuickViewContext = createContext<{
  handleClick: () => void;
  open: boolean;
}>({ handleClick: () => null, open: false });

export const QuickViewProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <QuickViewContext.Provider value={{ handleClick, open }}>
      {children}
    </QuickViewContext.Provider>
  );
};

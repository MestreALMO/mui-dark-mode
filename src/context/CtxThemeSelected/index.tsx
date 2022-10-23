import { createContext, useContext, useState } from "react";

const CtxThemeSelectedContext = createContext<any>({});

interface CtxThemeSelectedProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function CtxThemeSelectedProvider({
  children,
}: CtxThemeSelectedProviderProps) {
  const [ctxThemeSelected, setCtxThemeSelected] = useState("dark");

  return (
    <CtxThemeSelectedContext.Provider
      value={{ ctxThemeSelected, setCtxThemeSelected }}
    >
      {children}
    </CtxThemeSelectedContext.Provider>
  );
}

export const useCtxThemeSelected = () => {
  const context = useContext(CtxThemeSelectedContext);
  const { ctxThemeSelected, setCtxThemeSelected } = context;

  const changeCtxThemeSelected = () => {
    ctxThemeSelected === "dark"
      ? setCtxThemeSelected("light")
      : setCtxThemeSelected("dark");
  };

  return { ctxThemeSelected, changeCtxThemeSelected };
};

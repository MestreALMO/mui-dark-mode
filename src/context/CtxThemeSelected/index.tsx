import { createContext, useContext, useState } from "react";

const CtxThemeSelectedContext = createContext({});

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
  const { ctxThemeSelected, setCtxThemeSelected }: any = context;
  return { ctxThemeSelected, setCtxThemeSelected };
};

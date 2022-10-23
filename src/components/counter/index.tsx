import { Typography } from "@mui/material";
import { useCtxThemeSelected } from "../../context/CtxThemeSelected";

export const Counter = () => {
  const { ctxThemeSelected, setCtxThemeSelected } = useCtxThemeSelected();

  return (
    <>
      <Typography>test inside counter</Typography>
      <h2>Counter: {ctxThemeSelected}</h2>
      <button
        onClick={() => {
          setCtxThemeSelected(ctxThemeSelected + 1);
        }}
      >
        Count + 1
      </button>
    </>
  );
};

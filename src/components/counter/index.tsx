import { Typography } from "@mui/material";
import { useCtxThemeSelected } from "../../context/ctxThemeSelected";

export const Counter = () => {
  const { ctxThemeSelected, changeCtxThemeSelected } = useCtxThemeSelected();

  return (
    <>
      <Typography>test inside counter</Typography>
      <h2>Counter: {ctxThemeSelected}</h2>
      <button
        onClick={() => {
          changeCtxThemeSelected();
        }}
      >
        Count + 1
      </button>
    </>
  );
};

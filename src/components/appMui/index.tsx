import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, CssBaseline, Typography } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export function AppMui() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        This app is using the dark mode
        <Typography sx={{ color: "primary.main" }}>lorem</Typography>
        <Button>test</Button>
      </main>
    </ThemeProvider>
  );
}

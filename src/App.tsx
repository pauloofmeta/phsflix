import { ThemeProvider } from "styled-components";
import { MovieList } from "./Components/MovieList";
import { Navbar } from "./Components/Navbar";
import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <MovieList />
      <GlobalStyle />
    </ThemeProvider>
  );
}

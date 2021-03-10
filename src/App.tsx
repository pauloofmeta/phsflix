import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

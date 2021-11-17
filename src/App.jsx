import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { useRoutes } from "react-router";
import GlobalStyles from "./components/GlobalStyles";
import { routes } from "./routes";
import theme from "./theme";

const App = () => {
  const content = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {content}
    </ThemeProvider>
  );
};

export default App;

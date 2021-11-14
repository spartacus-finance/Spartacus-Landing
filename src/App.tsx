import React, { useMemo } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

import { createTheme, ThemeProvider } from "react-neu";
import useLocalStorage from "hooks/useLocalStorage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Start from "views/Start";
import Farm from "views/Farm";
import Dashboard from "views/Dashboard";
import Govern from "views/Govern";
import Swap from "views/Swap";
import TopBar from "components/TopBar";

function App() {
  function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  }

  return (
    <HashRouter>
      <Providers>
        <Web3ReactProvider getLibrary={getLibrary}>
          <TopBar />
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>

          </Switch>
        </Web3ReactProvider>
      </Providers>
    </HashRouter>
  );
}

// themeProvider

const Providers: React.FC = ({ children }) => {
  const [darkModeSetting] = useLocalStorage("darkMode", false);
  const { dark: darkTheme, light: lightTheme } = useMemo(() => {
    return createTheme({
      baseColor: { h: 240, s: 100, l: 41 },
      baseColorDark: { h: 229, s: 89, l: 50 },
      borderRadius: 28,
    });
  }, []);
  return (
    <ThemeProvider
      darkModeEnabled={darkModeSetting}
      darkTheme={darkTheme}
      lightTheme={lightTheme}
    >
      {children}
    </ThemeProvider>
  );
};

export default App;

import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import "./App.css";
import AppRoutes from "./AppRoutes/AppRoutes";
import { store } from "./Redux/store/store";
import { DarkTheme } from "./Themes/DarkTheme";

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

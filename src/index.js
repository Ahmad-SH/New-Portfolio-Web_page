import ReactDOM from "react-dom";
import { theme } from "./MaterialStyling/theme";
import { ThemeProvider } from "@material-ui/styles";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

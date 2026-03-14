import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const redirect = new URLSearchParams(window.location.search).get("redirect");

if (redirect) {
  const nextUrl = decodeURIComponent(redirect);
  window.history.replaceState({}, "", nextUrl);
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

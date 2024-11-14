import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Pokemon } from "./components/Pokemon";
import { Types } from "./components/Types";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/pokemon/:name",
    element: <Pokemon />,
  },
  {
    path: "/types/:name",
    element: <Types />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

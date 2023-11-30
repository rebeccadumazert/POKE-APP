import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokeDetails from "./components/PokeDetails";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/:pokeName",
    element: <PokeDetails />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };

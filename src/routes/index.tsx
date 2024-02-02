import { createBrowserRouter } from "react-router-dom";

// import pages
import { Auth } from "../pages/Auth";
import { Characters } from "../pages/Characters";

// Create routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: '/characters',
    element: <Characters />,
  }
]);

export { router };

import { createBrowserRouter } from "react-router-dom";

// import pages
import { Auth } from "../pages/Auth";

// Create routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
]);

export { router };

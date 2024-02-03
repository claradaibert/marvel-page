import { createBrowserRouter } from "react-router-dom";

// import pages
import { Auth } from "../pages/Auth";
import { DefaultListPage } from "../pages/DefaultListPage";

// Create routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: '/characters',
    element: <DefaultListPage />,
  },
  {
    path: '/comics',
    element: <DefaultListPage />,
  },
  {
    path: '/creators',
    element: <DefaultListPage />,
  },
]);

export { router };

import { createBrowserRouter } from "react-router-dom";

// import pages
import { Auth } from "../pages/Auth";
import { Comics } from "../pages/Comics";
import { Creators } from "../pages/Creators";
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
  },
  {
    path: '/comics',
    element: <Comics />,
  },
  {
    path: '/creators',
    element: <Creators />,
  },
]);

export { router };

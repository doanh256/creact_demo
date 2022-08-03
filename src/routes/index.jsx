import React, { Children } from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import MovieDetail from "../pages/movie-detail/movie-detail";

function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetail />,
        },
      ],
    },
  ]);

  return routing;
}

export default Router;

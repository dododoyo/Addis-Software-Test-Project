import { RouterProvider, createBrowserRouter } from "react-router-dom";


import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

import DefaultLayout from "./pages/DefaultLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "edit/:id",
        element: <EditPage />,
      },
      {
        path: "create",
        element: <CreatePage />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

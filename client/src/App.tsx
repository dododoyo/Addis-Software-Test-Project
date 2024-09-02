import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

import DefaultLayout from "./containers/DefaultLayout";
import { ReduxProvider } from "./containers/ReduxProvider";

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
  return (
    <ReduxProvider>
      <RouterProvider router={router}></RouterProvider>;
    </ReduxProvider>
  );
};

export default App;

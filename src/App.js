import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoardPage from "./Pages/DashBoardPage";
import HomePage from "./Pages/HomePage";
import { NotFound } from "./Components/Utils";
import { SignIn, LogOut, SignUp } from "./Components/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard/*",
    element: <DashBoardPage />,
  },
  {
    path: "/sign",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/logout",
    element: <LogOut />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

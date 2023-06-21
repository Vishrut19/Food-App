import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        // Example of Dynamic Path
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Grocery from "./components/Grocery.jsx";
import { Suspense } from "react";

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
      {
        path: "Grocery",
        element: (
          // Suspense is used to make our app hold for sometime when the data is not loaded on the screen.
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

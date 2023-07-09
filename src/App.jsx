/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";

//? This is an Example of Lazy Loading
const Grocery = lazy(() => import("./components/Grocery"));
//! This import is different from normal import statement as,
//! this import is a function import() and it contains the path of the component that is to be loaded.
const App = () => {
  const [user, setUser] = useState({
    name: "Vishrut Agarwalla",
    email: "vishrutagarwalla19@gmail.com",
  });

  return (
    <>
      {/* This is overriding the default value provided by the UserContext */}
      <UserContext.Provider value={{ user: user }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </>
  );
};

export default App;

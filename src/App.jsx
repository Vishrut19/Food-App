/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

//? This is an Example of Lazy Loading
const Grocery = lazy(() => import("./components/Grocery"));
//! This import is different from normal import statement as,
//! this import is a function import() and it contains the path of the component that is to be loaded.
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;

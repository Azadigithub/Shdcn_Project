import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
const routes = [
  { path: "/", element: <h1>home</h1> },
  // {path:'/' , element : <></>},
  // {path:'/' , element : <></>},
];
function App() {
  const router = useRoutes(routes);

  return (
    <>
      <div className=""></div>
      {router}
    </>
  );
}

export default App;

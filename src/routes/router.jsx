import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default Router;

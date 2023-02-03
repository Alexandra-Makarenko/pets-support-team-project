import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
// import { lazy } from "react";

export const App = () => {
  return ( <Routes>
      <Route path="/" element={<SharedLayout />}>
        
      </Route>
    </Routes>
  );
};

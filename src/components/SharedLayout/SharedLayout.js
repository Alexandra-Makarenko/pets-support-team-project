import { Header } from "../Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


export const SharedLayout = () => {
  return (
    <div>
        <Header/>
          <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
          </Suspense>        
    </div>
  );
};
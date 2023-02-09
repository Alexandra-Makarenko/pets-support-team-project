import { Header } from "../Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SharedLayoutBox } from "./SharedLayout.styled";



export const SharedLayout = () => {
  return (
    <SharedLayoutBox>
      <Header />
          <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
          </Suspense> 
     
    </SharedLayoutBox>
  );
};
import { Header } from "../Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SharedLayoutBox, SharedLayoutContainer } from "./SharedLayout.styled";



export const SharedLayout = () => {
  return (
    <SharedLayoutBox>
      <SharedLayoutContainer>
      <Header />
          <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
          </Suspense> 
        </SharedLayoutContainer>       
    </SharedLayoutBox>
  );
};
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SharedLayoutBox } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <SharedLayoutBox>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SharedLayoutBox>
  );
};

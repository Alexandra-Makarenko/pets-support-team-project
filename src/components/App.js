import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const OurFriendsPage = lazy(() =>
  import('../pages/OurFriendsPage/OurFriendsPage')
);
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const NoticesCategoryList = lazy(() =>
  import('./Notices/NoticesCategoryList/NoticesCategoryList')
);

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/login" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={LoginPage} redirectTo="/user" />}
        />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />}>
          <Route path="sell" element={<NoticesCategoryList />} />
          <Route path="lost-found" element={<NoticesCategoryList />} />
          <Route path="in-good-hands" element={<NoticesCategoryList />} />
          <Route path="favorite" element={<NoticesCategoryList />} />
          <Route path="own" element={<NoticesCategoryList />} />
        </Route>
        <Route
          path="/user"
          element={<PrivateRoute component={UserPage} redirectTo="/login" />}
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

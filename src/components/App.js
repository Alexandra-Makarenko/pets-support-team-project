import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ForgotPasswordPage = lazy(() =>
  import('../pages/ForgotPassword/ForgotPasswordPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const OurFriendsPage = lazy(() =>
  import('../pages/OurFriendsPage/OurFriendsPage')
);
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const OwnerPage = lazy(() => import('../pages/OwnerPage/OwnerPage'));
const NoticesCategoryList = lazy(() =>
  import('./Notices/NoticesCategoryList/NoticesCategoryList')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/user" />
            }
          />
          <Route
            path="/password"
            element={
              <RestrictedRoute
                component={ForgotPasswordPage}
                redirectTo="/login"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/user" />
            }
          />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route
            exact
            path="/notices"
            element={<Navigate to={'/notices/sell'} />}
          />
          <Route path="/notices" element={<NoticesPage />}>
            <Route path="sell" element={<NoticesCategoryList />} />
            <Route path="lost-found" element={<NoticesCategoryList />} />
            <Route path="in-good-hands" element={<NoticesCategoryList />} />
            <Route path="favorite" element={<NoticesCategoryList />} />
            <Route path="own" element={<NoticesCategoryList />} />
            <Route path="*" element={<Navigate to={'/notices/sell'} />} />
          </Route>
          <Route path="/owner/:id" element={<OwnerPage />} />
          <Route
            path="/user"
            element={<PrivateRoute component={UserPage} redirectTo="/login" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm } from 'components/Search/SearchForm';
import { Container } from '../../components/Container/Container';
import { NoticesCategoriesNav } from '../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { AddNoticeButton } from '../../components/Notices/AddNoticeButton/AddNoticeButton';
import { NavBox, TitleBox } from './NoticesPage.styled';
import { Loader } from 'components/Loader/Loader';
import { getNoticesIsLoading, getNoticesError } from 'redux/notices/selectors';

const NoticesPage = () => {
  const isLoading = useSelector(getNoticesIsLoading);
  const error = useSelector(getNoticesError);

  return (
    <Container>
      <TitleBox>
        <PagesTitle>Find your favorite pet</PagesTitle>
      </TitleBox>
      <SearchForm mbtn={{ mobile: 28, rest: 40 }} />
      <NavBox>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </NavBox>

      {isLoading && !error && <Loader />}
      {error &&
        !isLoading &&
        toast.error(`Something wrong, please try again later: ${error}`)}

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default NoticesPage;
